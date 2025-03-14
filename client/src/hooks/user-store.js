import { create } from "zustand";

export const userStore = create((set) => ({
  name: "",
  room: "",
  users: [],

  setName: (name) => set({ name }),
  setRoom: (room) => set({ room }),
  setUsers: (users) => set({ users }),
}));
