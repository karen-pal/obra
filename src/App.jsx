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
} from "./components/Tooltips";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BuclesModal,
  DatasetsModal,
  EntrenamientoModal,
  InferenciaModal,
} from "./components/Modals";
import AutoTooltipSwitcher from "./components/AutoTooltipSwitcher";
import InactivityModalTimer from "./components/InteractivityModalTimer";

import {
  datasetsSueños,
  datasetIda,
  datasetDescription,
  datasetImgTextosFull,
  datasetsClusters,
  DatasetsSuenosTexto,
  AudioEntrenamiento,
  Thing,
  inferenciaDeep,
  inferenciaFilters,
  inferenciaGif,
  inferenciaTwoImg,
  BuclesImg,
  bucleImg,
  bucleMiniflujo1,
  bucleMiniflujo2,
  bucleMiniflujo4,
  bucleMiniflujo5,
  buclesFlujoCompl,
  buclesProcLengConZocalo,
} from "./images/images";

import useAssetStore from "./store/useAssetsStore";

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
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const handleEnterFullscreen = (e) => {
    e.preventDefault();
    document.documentElement
      .requestFullscreen()
      .then(() => {
        setIsButtonVisible(false);
      })
      .catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsButtonVisible(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const preloadAssets = useAssetStore((state) => state.preloadAssets);
  const assets = useAssetStore((state) => state.assets);
  useEffect(() => {
    preloadAssets([
      datasetsSueños,
      datasetIda,
      datasetDescription,
      datasetImgTextosFull,
      datasetsClusters,
      DatasetsSuenosTexto,
      AudioEntrenamiento,
      Thing,
      inferenciaDeep,
      inferenciaFilters,
      inferenciaGif,
      inferenciaTwoImg,
      BuclesImg,
      bucleImg,
      bucleMiniflujo1,
      bucleMiniflujo2,
      bucleMiniflujo4,
      bucleMiniflujo5,
      buclesFlujoCompl,
      buclesProcLengConZocalo,
    ]);
  }, [preloadAssets]);
  useEffect(() => {
    // Log assets after they are updated in Zustand
    console.log("Updated Zustand store state with assets:", assets);
  }, [assets]);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      {isButtonVisible ? (
        <button
          onClick={(e) => handleEnterFullscreen(e)}
          className="z-50 relative bg-slate-900 text-white p-2"
        >
          Fullscreen
        </button>
      ) : null}

      {/* <h1 className="text-center text-3xl mt-4 mb-2">Lenguaje Frontera</h1>
      <h3 className="text-center text-xl">por Karen Palacio</h3>
      <h6 className="text-center text-sm mt-2 px-4">
        Esto es una bitácora interactiva, hacé click en distintas partes
      </h6> */}

      <div className="w-[100vw] h-[100vh] absolute top-[-1.9vh]">
        <Canvas
          camera={{ position: [60, 60, 60], fov: 3.5 }}
          position={[0, 100, 0]}
        >
          <MetaballsScene />
        </Canvas>
        <h1
          className="absolute top-[35vh] left-[30vw] text-2xl text-shadow lg:left-[43vw] cursor-pointer underline underline-offset-2 text-blue-200"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<DatasetTooltip />);
            setModalContent(<DatasetsModal />);
            setVisibleTooltip(true);
          }}
        >
          Datasets
        </h1>
        <h1
          className="absolute top-[50vh] left-[60vw] text-2xl text-shadow lg:left-[54.5vw] cursor-pointer underline  underline-offset-2 text-blue-200"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<EntrenamientoTooltip />);
            setModalContent(<EntrenamientoModal />);
            setVisibleTooltip(true);
          }}
        >
          Entrenamiento
        </h1>

        <h1
          className="absolute top-[60vh] left-[30vw] text-2xl text-shadow lg:left-[45vw] cursor-pointer underline underline-offset-2 text-blue-200"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<InferenciaTooltip />);
            setModalContent(<InferenciaModal />);
            setVisibleTooltip(true);
          }}
        >
          Generar
        </h1>
        <h1
          className="absolute top-[77vh] left-[45vw] text-2xl text-shadow lg:left-[48.5vw] cursor-pointer underline underline-offset-2 text-blue-200"
          onPointerDown={(e) => {
            e.stopPropagation();
            setTooltipContent(<BuclesTooltip />);
            setModalContent(<BuclesModal />);
            setVisibleTooltip(true);
          }}
        >
          Bucles
        </h1>
        <AutoTooltipSwitcher />
      </div>

      <AnimatePresence>
        {visibleTooltip ? (
          <div className="w-[100vw] h-[15vh] absolute bottom-[15vh] flex items-center justify-center lg:w-[35vw] lg:h-[90vh] lg:bottom-[5vh] lg:left-[1vw]">
            <motion.div
              className="p-6 bg-zinc-800 w-[95vw] h-[35vh]  rounded-lg shadow-md border border-zinc-600 relative overflow-y-auto overflow-x-hidden lg:max-h-[90vh] lg:h-auto"
              initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
              animate={{ opacity: 1, y: 0 }} // Animate to visible
              exit={{ opacity: 0, y: 20 }} // Animate out when closing
              transition={{ duration: 0.3 }} // Duration of the animation
            >
              <div className="flex flex-col">
                <div className="flex justify-end">
                  <button
                    className="absolute right-4 top-4 z-50"
                    onClick={() => setVisibleTooltip(false)}
                  >
                    <CloseIcon fill="#fafafa" size={16} />
                  </button>
                </div>
                <div className="text-base leading-relaxed">
                  {tooltipContent}
                </div>
                <button
                  className="bg-zinc-200 hover:bg-zinc-300 py-2 px-4 mt-4 rounded text-zinc-950"
                  onClick={() => {
                    setVisibleModal(true);
                    setVisibleTooltip(false);
                  }}
                >
                  Ver más
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {visibleModal ? (
          <div className="w-[100vw] h-[100vh] absolute bottom-4 flex items-center justify-center">
            <InactivityModalTimer />
            <motion.div
              className="p-6 bg-zinc-800 w-[95vw] h-[95vh] rounded border border-zinc-600 relative overflow-y-auto overflow-x-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => {
                  setVisibleModal(false);
                  setVisibleTooltip(false);
                }}
                className="fixed top-5 right-8"
              >
                <CloseIcon fill="#fafafa" size={20} />
              </button>
              {modalContent}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <p className="z-10 absolute text-xs left-1 bottom-1 lg:text-sm lg:left-5 lg:bottom-5">
        Crafted with care by NataliPP
        {/* <a
          className="underline cursor-pointer"
          href="https://portfolio-natali-pp.vercel.app/"
          target="_blank"
        >
          NataliPP
        </a> */}
      </p>
    </div>
  );
}
