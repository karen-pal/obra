import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import {
  Html,
  OrbitControls,
  MarchingCubes,
  MarchingCube,
  Line,
  shaderMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  TooltipContentOne,
  TooltipContentThree,
  TooltipContentTwo,
} from "./Tooltips";
import useTooltipStore from "../store/useTooltipStore";
import { Modal1, Modal2, Modal3 } from "./Modals";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry";
import { Wireframe } from "three/examples/jsm/lines/Wireframe";
import {
  EffectComposer,
  Bloom,
  SelectiveBloom,
  Noise,
} from "@react-three/postprocessing";
const ColorShiftMaterial = shaderMaterial(
  {
    u_time: 0,
    u_intensity: 0.3,
    color: new THREE.Color(0.2, 0.0, 0.1),
  },
  // vertex shader
  /*glsl*/ `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

// Classic Perlin 3D Noise
// by Stefan Gustavson
//
vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

// End of Perlin Noise Code

void main() {
    vUv = uv;

    vDisplacement = .738 * cnoise(position*2.5 + vec3(1.0 * u_time));

    vec3 newPosition = position  + normal * (0.05 *u_intensity * vDisplacement);

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition ;
    vec4 projectedPosition = projectionMatrix * viewPosition ;

    gl_Position = projectedPosition;
}
    `,
  // fragment shader
  /*glsl*/ `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    // Distortion effect based on displacement and time
    float distort = vDisplacement * 0.10 * u_intensity * sin(vUv.y  + u_time);

    // Define blood-like red gradient
    vec3 bloodColor = vec3(0.6, 0.04, 0.04); // Dark blood red
    vec3 lighterBloodColor = vec3(0.9, 0.1, 0.1); // Lighter red

    // Interpolate between dark and light red based on distortion
    vec3 color = mix(bloodColor, lighterBloodColor, 0.50 - distort);

    // Set the final fragment color
    //gl_FragColor = vec4(color, 1.0);
    gl_FragColor = vec4(vec3(1.), 1.0);
}

    `
);

const ColorShiftMaterial2 = shaderMaterial(
  { u_time: 0, u_color: new THREE.Color(0.2, 0.0, 0.1) },
  /* glsl */ `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /* glsl */ `
    uniform float u_time;
    uniform vec3 u_color;
    varying vec3 vPosition;
    
    void main() {
      // Simple color shift based on position and time
      float shift = sin(u_time + vPosition.x * 10.0) * 0.5 + 0.5;
      vec3 color = mix(u_color, vec3(1.0, 0.0, 0.0), shift);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ ColorShiftMaterial2 });

const WireframeCube = () => {
  const { scene } = useThree();

  useEffect(() => {
    // Create Box geometry and edges
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);

    // Convert the edges into line geometry
    const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(
      edgesGeometry
    );

    // Create Line Material
    const matLine = new LineMaterial({
      color: 0xfafafa,
      linewidth: 5, // Adjust the line width
    });

    // Create the wireframe from line geometry and material
    const wireframe = new Wireframe(lineGeometry, matLine);
    wireframe.computeLineDistances();
    wireframe.scale.set(1, 1, 1);

    // Add the wireframe to the scene
    scene.add(wireframe);

    return () => {
      // Clean up the wireframe when component unmounts
      scene.remove(wireframe);
    };
  }, [scene]);

  return null;
};

// Custom hook to separate layers for selective bloom
// const useSelectiveBloom = () => {
//   const { scene, camera, gl } = useThree();
//   const [bloomComposer] = useState(() => new THREE.EffectComposer(gl));
//   const [finalComposer] = useState(() => new THREE.EffectComposer(gl));

//   useEffect(() => {
//     const bloomPass = new THREE.RenderPass(scene, camera);
//     bloomComposer.addPass(bloomPass);
//     bloomComposer.addPass(
//       new THREE.UnrealBloomPass(new THREE.Vector2(1024, 1024), 1.5, 0.4, 0.85)
//     );

//     // For the non-bloomed pass (normal scene)
//     const finalPass = new THREE.ShaderPass(new THREE.CopyShader());
//     finalComposer.addPass(finalPass);
//   }, [scene, camera, gl, bloomComposer, finalComposer]);

//   return { bloomComposer, finalComposer };
// };

const MetaballsMarchingCubes = () => {
  const materialRef = useRef();
  const [isGlowing, setIsGlowing] = useState(false);
  const {
    setVisibleTooltip,
    setTooltipContent,
    setModalContent,
    visibleTooltip,
  } = useTooltipStore();

  // This hook runs on every frame to update the material's time uniform
  useFrame((state) => {
    const { clock } = state;

    // Update the shader material uniforms
    if (materialRef.current) {
      materialRef.current.u_time = 0.4 * clock.getElapsedTime();
      materialRef.current.u_intensity = THREE.MathUtils.lerp(
        materialRef.current.u_intensity,
        0.15,
        0.2
      );
    }
  });

  const { gl, scene, camera } = useThree();
  const marchingCubeRef = useRef();
  const cubeRef = useRef();
  const spotlightRef = useRef();
  const haloRef = useRef();
  // useEffect(() => {
  //   if (marchingCubeRef.current && spotlightRef.current) {
  //     // Create a target object for the spotlight
  //     const target = new THREE.Object3D();
  //     target.position.set(-0.7, 0.4, -0.5); // Position of the MarchingCube
  //     scene.add(target);
  //     spotlightRef.current.target = target;
  //   }
  // }, [scene]);

  // useEffect(() => {
  //   // Assign layer 1 to the MarchingCube
  //   if (marchingCubeRef.current) {
  //     marchingCubeRef.current.layers.enable(1);
  //   }
  // }, []);

  // const marchingCubeRef = useRef();
  const [clicked, setClicked] = useState(false);
  useFrame(() => {
    // if (marchingCubeRef.current) {
    //   const scaleFactor = clicked ? 2.5 : 1; // Scale up when clicked
    //   // Scale the marching cube on click
    //   marchingCubeRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    // }
    // if (haloRef.current) {
    //   const haloScaleFactor = clicked ? 1.1 : 1; // Make halo slightly larger than cube
    //   haloRef.current.scale.set(
    //     haloScaleFactor,
    //     haloScaleFactor,
    //     haloScaleFactor
    //   );
    // }
  });
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.05} />
      {/* <directionalLight position={[2, 2, 5]} intensity={0.01} /> */}
      {/* Wireframe Cube */}
      <WireframeCube />
      <spotLight
        ref={spotlightRef}
        color="white"
        intensity={1.5}
        angle={0.3}
        penumbra={0.15}
        position={[-0.7, 0.4, -0.5]} // Position the spotlight above and in front of the MarchingCube
        target={marchingCubeRef.current}
      />

      <MarchingCubes
        resolution={64}
        maxPolyCount={20000}
        enableUvs={false}
        enableColors={true} // We will handle colors via custom material
        strength={0.95}
        position={[0, 0, 0]} // Adjust position as needed
      >
        {/* mesh for marchingball at [-0.75, 0, 0] */}
        <mesh
          ref={marchingCubeRef}
          position={[-0.7, 0.4, -0.5]}
          onPointerDown={(e) => {
            e.stopPropagation(); // Prevent this click from being considered "outside"
            setVisibleTooltip(true);
            setTooltipContent(<TooltipContentThree />);
            setModalContent(<Modal3 />);
            setIsGlowing(!isGlowing);
            setClicked(!clicked); // Toggle the clicked state
          }}
        >
          <boxGeometry args={[1.0, 1, 1]} />
          <meshBasicMaterial opacity={0} color="blue" transparent />
          <MarchingCube
            ref={cubeRef}
            strength={4}
            subtract={10}
            position={[0.16, 0, 0]} // Use relative position since it's already in a parent mesh
          />
          {clicked ? (
            <>
              <mesh ref={haloRef} castShadow>
                <sphereGeometry args={[0.87, 16, 16]} />
                {/* <meshBasicMaterial color="lightblue" transparent opacity={0.1} /> */}
                <meshPhysicalMaterial
                  color="#a3a3a3" // Dark color
                  transmission={0.5}
                  thickness={0.1}
                  roughness={0.01}
                  opacity={0.9}
                  transparent={true}
                />
                <meshBasicMaterial opacity={0} color="#a3a3a3" wireframe />

                {/* Light Sources */}
                <ambientLight intensity={0.5} />
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={1}
                  castShadow
                />
              </mesh>
            </>
          ) : null}
          <EffectComposer></EffectComposer>
        </mesh>
        <mesh
          position={[0.1, 0.25, -0.2]}
          onPointerDown={(e) => {
            e.stopPropagation(); // Prevent this click from being considered "outside"
            setVisibleTooltip(true);
            setTooltipContent(<TooltipContentTwo />);
            setModalContent(<Modal2 />);
          }}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial opacity={0} color="blue" transparent />
          <MarchingCube strength={0.5} subtract={1.49} position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[0.5, -0.8, 0.25]}
          onPointerDown={(e) => {
            e.stopPropagation(); // Prevent this click from being considered "outside"
            setVisibleTooltip(true);
            setTooltipContent(<TooltipContentOne />);
            setModalContent(<Modal1 />);
          }}
        >
          <boxGeometry args={[0.75, 0.75, 0.75]} />
          <meshBasicMaterial opacity={0} color="blue" transparent />

          <MarchingCube strength={0.3} subtract={1} position={[0, 0, 0]} />
        </mesh>
        <mesh
          position={[0.2, -0.18, 0.0]}
          onPointerDown={(e) => {
            e.stopPropagation(); // Prevent this click from being considered "outside"
            setVisibleTooltip(true);
            setTooltipContent(<TooltipContentOne />);
            setModalContent(<Modal1 />);
          }}
        >
          <boxGeometry args={[0.45, 0.45, 0.45]} />
          <meshBasicMaterial opacity={0} color="blue" transparent />

          <MarchingCube
            strength={0.06}
            subtract={0.07}
            position={[0.15, 0, 0]}
          />
        </mesh>
        <mesh
          position={[0.4, 0.15, 0.0]}
          onPointerDown={(e) => {
            e.stopPropagation(); // Prevent this click from being considered "outside"
            setVisibleTooltip(true);
            setTooltipContent(<TooltipContentOne />);
            setModalContent(<Modal1 />);
          }}
        >
          <boxGeometry args={[1.0, 1.0, 1.0]} />
          <meshBasicMaterial opacity={0} color="blue" transparent />

          <MarchingCube strength={1} subtract={2} position={[0.15, 0, 0]} />
        </mesh>
        <mesh
          position={[0.4, -0.5, 0.1]}
          onPointerDown={(e) => {
            e.stopPropagation(); // Prevent this click from being considered "outside"
            setVisibleTooltip(true);
            setTooltipContent(<TooltipContentOne />);
            setModalContent(<Modal1 />);
          }}
        >
          <boxGeometry args={[1.0, 1.0, 1.0]} />
          <meshBasicMaterial opacity={0} color="blue" transparent />

          <MarchingCube strength={1} subtract={2} position={[0.15, 0, 0]} />
        </mesh>
        {/* 
        <MarchingCube strength={1} subtract={10} position={[0.5, 0, 0]} />
        <MarchingCube strength={0.8} subtract={10} position={[0.75, 0, 0]} /> */}
        {/* <MarchingCube strength={0.5} subtract={1} position={[0, 0, 0]} />
        <MarchingCube strength={0.22} subtract={0.5} position={[0.75, 0, 0]} /> */}
        <colorShiftMaterial2 ref={materialRef} key={ColorShiftMaterial2.key} />
      </MarchingCubes>
    </>
  );
};

export default MetaballsMarchingCubes;
