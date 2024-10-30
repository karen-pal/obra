// import { MarchingCube } from "@react-three/drei";
// import { useEffect, useState } from "react";
// import { easing } from "maath";

// const AnimatedMarchingCube = ({
//   initialStrength,
//   subtract,
//   initialPosition,
//   velocityX,
//   boundaryX,
//   velocityY,
//   boundaryY,
// }) => {
//   const [strength, setStrength] = useState(initialStrength);
//   //const [strength, setStrength] = useState(initialStrength);
//   const [position, setPosition] = useState(initialPosition);
// //   const [directionX, setDirectionX] = useState(1); // For X movement
// //   const [directionY, setDirectionY] = useState(1); // For Y movement

//   useEffect(() => {
//     let direction = 1; // 1 for growing, -1 for shrinking
//     let animationFrameId;

//     const animate = (time) => {
//       // Update strength based on the elapsed time
//       // setStrength((prevStrength) => {
//       //   let newStrength = prevStrength + direction * 0.009; // Change increment size as needed

//       //   // Check if we need to change direction
//       //   if (newStrength > initialStrength * 1.5) {
//       //     newStrength = initialStrength * 1.5; // Clamp to max value
//       //     direction = -1; // Start shrinking
//       //   } else if (newStrength < initialStrength) {
//       //     newStrength = initialStrength; // Clamp to min value
//       //     direction = 1; // Start growing
//       //   }

//       //   return newStrength; // Update strength
//       // });

//       // Update position for x-axis movement
//       if (typeof velocityX === "number" && typeof boundaryX === "number") {
//         setPosition((prevPosition) => {
//           let newX = prevPosition[0] + direction * velocityX;

//           // Define movement bounds (e.g., oscillate between -2 and 2 on x-axis)
//           if (newX > boundaryX) {
//             newX = boundaryX;
//             direction = -1; // Reverse direction (move left)
//           } else if (newX < 0) {
//             newX = 0;
//             direction = 1; // Reverse direction (move right)
//           }

//           // let newY = prevPosition[1] + direction * 0.003;

//           // // Define movement bounds (e.g., oscillate between -2 and 2 on x-axis)
//           // if (newY > 0.51) {
//           //   newY = 0.51;
//           //   direction = -1; // Reverse direction (move left)
//           // } else if (newY < 0) {
//           //   newY = 0;
//           //   direction = 1; // Reverse direction (move right)
//           // }

//           // Return updated position with modified x-coordinate
//           return [newX, prevPosition[1], prevPosition[2]];
//         });
//       }

//       // Update position for y-axis movement
//       if (typeof velocityY === "number" && typeof boundaryY === "number") {
//         setPosition((prevPosition) => {
//           let newY = prevPosition[1] + direction * velocityY;

//           // Define movement bounds (e.g., oscillate between -2 and 2 on x-axis)
//           if (newY > boundaryY) {
//             newY = boundaryY;
//             direction = -1; // Reverse direction (move left)
//           } else if (newY < 0) {
//             newY = 0;
//             direction = 1; // Reverse direction (move right)
//           }

//           // Return updated position with modified x-coordinate
//           return [prevPosition[0], newY, prevPosition[2]];
//         });
//       }

//       animationFrameId = requestAnimationFrame(animate); // Continue the animation
//     };

//     animationFrameId = requestAnimationFrame(animate); // Start the animation

//     return () => {
//       cancelAnimationFrame(animationFrameId); // Cleanup on unmount
//     };
//   }, [initialStrength, velocityX, boundaryX, velocityX, boundaryX]);
//   // Debugging strength value
//   //console.log("Current strength:", strength, "velocitiX", velocityX);
//   return (
//     <MarchingCube strength={strength} subtract={subtract} position={position} />
//   );
// };

// export default AnimatedMarchingCube;

//--------------------------------------------

// import { MarchingCube } from "@react-three/drei";
// import { useEffect, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { damp3 } from "maath/easing";

// const AnimatedMarchingCube = ({
//   initialStrength,
//   subtract,
//   initialPosition,
//   velocityX = 1.5, // Increased velocity for more movement
//   boundaryX = 1.5, // Set a higher boundary for visible movement
//   velocityY = 1.5, // Increased velocity for Y movement
//   boundaryY = 1.5, // Set a higher boundary for visible movement
// }) => {
//   const [position, setPosition] = useState(initialPosition);
//   const clock = new THREE.Clock();

//   useFrame((state) => {
//     // Calculate new target positions using sine wave for smooth oscillation
//     const time = state.clock.getElapsedTime();
//     const targetX = Math.sin(time * velocityX) * boundaryX; // Use sine for oscillation
//     const targetY = Math.sin(time * velocityY) * boundaryY; // Use sine for oscillation

//     // Log target positions for debugging
//     //console.log("targetX:", targetX, "targetY:", targetY);

//     // Smoothly interpolate the position to the target position
//     //const smoothedPosition = [...position];
//     //damp3(smoothedPosition, [targetX, targetY, position[2]], 0.1, delta);

//     // Update the position state
//     //setPosition(smoothedPosition);
//     setPosition([targetX, targetY, position[2]]);

//   });

//   //console.log("position", position); // Log position for debugging

//   return (
//     <MarchingCube
//       strength={initialStrength}
//       subtract={subtract}
//       position={position}
//     />
//   );
// };

// export default AnimatedMarchingCube;

import { MarchingCube } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const AnimatedMarchingCube = ({
  initialStrength,
  subtract,
  initialPosition,
  velocityX, // Default value if not passed
  boundaryX, // Default value if not passed
  velocityY, // Default value if not passed
  boundaryY, // Default value if not passed
}) => {
  const [position, setPosition] = useState(initialPosition);

  useFrame((state) => {
    // Get the elapsed time
    const time = state.clock.getElapsedTime();
    let targetX, targetY;

    // Calculate new target positions using sine wave for smooth oscillation
    if (!!velocityX && !!boundaryX) {
      targetX = Math.sin(time * velocityX) * boundaryX; // X oscillation
      //targetX = Math.max(-boundaryX, Math.min(boundaryX, targetX));
      targetX = Math.max(-1, Math.min(1, targetX));
      setPosition([targetX, position[1], position[2]]);
    }
    if (!!velocityY && !!boundaryY) {
      targetY = Math.sin(time * velocityY) * boundaryY; // X oscillation
      //targetY = Math.max(-boundaryY, Math.min(boundaryY, targetY));
      targetY = Math.max(-1, Math.min(1, targetY));
      //console.log("targettttt", Math.sin(time * velocityX));
      setPosition([position[0], targetY, position[2]]);
    }
    //const targetY = Math.sin(time * velocityY) * boundaryY; // Y oscillation

    // Update the position with the new target values
    //setPosition([targetX, targetY, position[2]]);
  });

  //console.log("position", position);

  return (
    <MarchingCube
      strength={initialStrength}
      subtract={subtract}
      position={position}
    />
  );
};

export default AnimatedMarchingCube;
