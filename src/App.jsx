import { Canvas } from "@react-three/fiber";
import "./App.css";
import MetaballsScene from "./components/MetaballScene";
import useTooltipStore from "./store/useTooltipStore";
import CloseIcon from "./assets/CloseIcon";
// import CloseIcon from "./assets/CloseIcon.jsx";

export default function Home() {
  const {
    visibleTooltip,
    setVisibleTooltip,
    tooltipContent,
    setVisibleModal,
    visibleModal,
    modalContent,
  } = useTooltipStore();
  console.log("testtttttttttttttttttttt", visibleTooltip);
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-[100vw] h-[100vh]">
        <Canvas camera={{ position: [-60, 60, 60], fov: 3.5 }}>
          <MetaballsScene />
        </Canvas>
      </div>
      {visibleTooltip ? (
        <div className="w-[100vw] h-[15vh] absolute bottom-[15vh] flex items-center justify-center">
          <div className="p-6 bg-zinc-800 w-[75vw] rounded border-zinc-600 relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => setVisibleTooltip(false)}
            >
              <CloseIcon fill="#fafafa" size={16} />
            </button>
            {tooltipContent}

            <button onClick={() => setVisibleModal(true)}>More info</button>
          </div>
        </div>
      ) : null}
      {visibleModal ? (
        <div className="w-[100vw] h-[100vh] absolute bottom-4 flex items-center justify-center">
          <div className="p-6 bg-zinc-800 w-[95vw] h-[95vh] rounded border-zinc-600 relative ">
            <button
              onClick={() => {
                setVisibleModal(false);
                setVisibleTooltip(false);
              }}
              className="absolute top-2 right-2"
            >
              <CloseIcon fill="#fafafa" />
            </button>
            {modalContent}
          </div>
        </div>
      ) : null}
    </div>
  );
}
