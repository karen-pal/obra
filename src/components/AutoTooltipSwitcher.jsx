import { useEffect, useState } from "react";
import useTooltipStore from "../store/useTooltipStore";
import {
  BuclesTooltip,
  DatasetTooltip,
  EntrenamientoTooltip,
  InferenciaTooltip,
} from "./Tooltips";
import {
  BuclesModal,
  DatasetsModal,
  EntrenamientoModal,
  InferenciaModal,
} from "./Modals";
const AutoTooltipSwitcher = () => {
  const [currentTooltip, setCurrentTooltip] = useState(0);
  const {
    setTooltipContent,
    setModalContent,
    setVisibleTooltip,
    visibleModal,
  } = useTooltipStore();

  const tooltips = [
    { tooltip: <DatasetTooltip />, modal: <DatasetsModal /> },
    { tooltip: <EntrenamientoTooltip />, modal: <EntrenamientoModal /> },
    { tooltip: <InferenciaTooltip />, modal: <InferenciaModal /> },
    { tooltip: <BuclesTooltip />, modal: <BuclesModal /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!visibleModal) {
        // Check if modal is not open
        setVisibleTooltip(false);

        setTimeout(() => {
          const nextTooltip = (currentTooltip + 1) % tooltips.length;
          setTooltipContent(tooltips[nextTooltip].tooltip);
          setModalContent(tooltips[nextTooltip].modal);
          setVisibleTooltip(true);
          setCurrentTooltip(nextTooltip);
        }, 500); // Small delay before switching to the next tooltip
      }
    }, 120000); // 120000 = 2 minutes

    return () => clearInterval(interval);
  }, [
    currentTooltip,
    visibleModal,
    setTooltipContent,
    setModalContent,
    setVisibleTooltip,
  ]);

  return null;
};

export default AutoTooltipSwitcher;
