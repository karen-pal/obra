import { useEffect, useState } from "react";
import useTooltipStore from "../store/useTooltipStore";

const InactivityModalTimer = () => {
  const [inactivityCounter, setInactivityCounter] = useState(0);
  const { visibleModal, setVisibleModal } = useTooltipStore();
  const INACTIVITY_THRESHOLD = 8 * 60 * 1000; // 8 minutes

  useEffect(() => {
    let timeout;

    // Resets counter whenever there's user interaction
    const resetInactivity = () => {
      setInactivityCounter(0);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (visibleModal) {
          setVisibleModal(false);
        }
      }, INACTIVITY_THRESHOLD);
    };

    const handleUserActivity = () => resetInactivity();

    document.addEventListener("touchstart", handleUserActivity);
    document.addEventListener("scroll", handleUserActivity);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("touchstart", handleUserActivity);
      document.removeEventListener("scroll", handleUserActivity);
    };
  }, [visibleModal, setVisibleModal]);

  return null;
};

export default InactivityModalTimer;
