import { create } from "zustand";

export const ChatStore = create((set) => ({
  message: "",
  setMessage: (message) => set({ message }),
}));
