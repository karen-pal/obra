import { Canvas } from "@react-three/fiber";
import "./App.css";
import MetaballsScene from "./components/MetaballScene";
import useTooltipStore from "./store/useTooltipStore";
import CloseIcon from "./assets/CloseIcon";
import {
  BuclesTooltip,
  DatasetTooltip,
  EntrenamientoTooltip,
  InferenciaTooltip,
  TooltipContentOne,
} from "./components/Tooltips";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import CloseIcon from "./assets/CloseIcon.jsx";

export default function Home() {
  const {
    visibleTooltip,
    setVisibleTooltip,
    tooltipContent,
    setVisibleModal,
    visibleModal,
    modalContent,
    setTooltipContent,
    setModalContent,
  } = useTooltipStore();
  const tooltipRef = useRef(null);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <h1 className="text-center text-3xl mt-4 mb-2">Lenguaje Frontera</h1>
      <h3 className="text-center text-xl">por Karen Palacio</h3>
      <h6 className="text-center text-sm mt-2 px-4">
        Esto es una bitácora interactiva, hacé click en distintas partes
      </h6>

      <div className="w-[100vw] h-[100vh] absolute top-[-1.9vh]">
        <Canvas
          camera={{ position: [60, 60, 60], fov: 3.5 }}
          position={[0, 100, 0]}
        >
          <MetaballsScene />
        </Canvas>
        <h1
          className="absolute top-[35vh] left-[20vw] text-lg text-shadow"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<DatasetTooltip />);
            //setModalContent(<Modal2 />);
            setVisibleTooltip(true);
          }}
        >
          Datasets
        </h1>
        <h1
          className="absolute top-[45vh] left-[50vw] text-lg text-shadow"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<EntrenamientoTooltip />);
            //setModalContent(<Modal2 />);
            setVisibleTooltip(true);
          }}
        >
          Entrenamiento
        </h1>
        <h1
          className="absolute top-[60vh] left-[20vw] text-lg text-shadow"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<InferenciaTooltip />);
            //setModalContent(<Modal2 />);
            setVisibleTooltip(true);
          }}
        >
          Inferencia
        </h1>
        <h1
          className="absolute top-[77vh] left-[42vw] text-lg text-shadow"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<BuclesTooltip />);
            //setModalContent(<Modal2 />);
            setVisibleTooltip(true);
          }}
        >
          Bucles
        </h1>
      </div>
      <AnimatePresence>
        {visibleTooltip ? (
          <div className="w-[100vw] h-[15vh] absolute bottom-[15vh] flex items-center justify-center">
            <motion.div
              className="p-6 bg-zinc-800 w-[95vw] h-[35vh] rounded border-zinc-600 relative overflow-y-auto overflow-x-hidden"
              initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
              animate={{ opacity: 1, y: 0 }} // Animate to visible
              exit={{ opacity: 0, y: 20 }} // Animate out when closing
              transition={{ duration: 0.3 }} // Duration of the animation
            >
              <button
                className="fixed bottom-[36.5vh] right-[4.5vw] z-50"
                onClick={() => setVisibleTooltip(false)}
              >
                <CloseIcon fill="#fafafa" size={16} />
              </button>
              {tooltipContent}

              <button
                className="bg-zinc-200 hover:bg-zinc-300 py-2 px-4 mt-4 rounded text-zinc-950"
                onClick={() => setVisibleModal(true)}
              >
                Ver más
              </button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
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
