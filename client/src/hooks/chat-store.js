import { create } from "zustand";

export const ChatStore = create((set) => ({
  message: "",
  messages: [],

  setMessage: (message) => set({ message }),
  setMessages: (messages) => set({ messages }),
}));
