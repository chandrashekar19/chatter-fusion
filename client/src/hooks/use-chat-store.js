import { create } from "zustand";

// Create the store
export const useChatStore = create((set) => ({
  // join component states
  name: "",
  room: "",
  users: "",
  message: "",
  messages: [],
  setName: (newName) => set({ name: newName }),
  setRoom: (newRoom) => set({ room: newRoom }),
  setUsers: (newUsers) => set({ users: newUsers }), // New setter
  setMessage: (newMessage) => set({ message: newMessage }), // New setter
  setMessages: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage], // Method to add a new message
    })),

  // chat component states
}));
