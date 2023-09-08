import { create } from "zustand";

export const useTimerCycleStore = create((set) => ({
  completedCycles: 0,
  setCompletedCycles: (value: number) => set({ completedCycles: value }),
}));
