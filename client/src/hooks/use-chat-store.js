import { create } from "zustand";

// Create the store
export const useChatStore = create((set) => ({
  // join component states
  name: "",
  room: "",
  users: "",

  setName: (newName) => set({ name: newName }),
  setRoom: (newRoom) => set({ room: newRoom }),
  setUsers: (newUsers) => set({ users: newUsers }),
}));
