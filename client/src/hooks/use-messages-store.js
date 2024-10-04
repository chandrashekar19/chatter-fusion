import { create } from "zustand";

// Create the store
export const useMessageStore = create((set) => ({
  message: "",
  messages: [],
  setMessage: (newMessage) => set({ message: newMessage }), // New setter
  setMessages: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage], // Method to add a new message
    })),

  // chat component states
}));
