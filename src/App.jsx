import { Canvas } from "@react-three/fiber";
import "./App.css";
import MetaballsScene from "./components/MetaballScene";

export default function Home() {
  return (
    <div className="container">
      <Canvas>
        <MetaballsScene />
      </Canvas>
    </div>
  );
}
