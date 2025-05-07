import { create } from "zustand";

type AppState = {
  user: null | { id: string; name: string };
  setUser: (user: AppState["user"]) => void;
  // Add more global state as needed
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
