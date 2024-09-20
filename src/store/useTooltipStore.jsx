import { create } from "zustand";
const useTooltipStore = create((set) => ({
  visibleTooltip: false,
  tooltipContent: null,
  setVisibleTooltip: (value) => set({ visibleTooltip: value }),
  setTooltipContent: (value) => set({ tooltipContent: value }),
  visibleModal: false,
  modalContent: null,
  setVisibleModal: (value) => set({ visibleModal: value }),
  setModalContent: (value) => set({ modalContent: value }),
}));
export default useTooltipStore;
