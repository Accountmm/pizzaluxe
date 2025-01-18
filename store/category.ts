import { create } from "zustand";

interface ICategorie {
  name: string;
  path: string;
}
interface IState {
  activeName: string;
  categories: ICategorie[];
  setActiveName: (activeId: string) => void;
}

export const useCategoryStore = create<IState>()((set) => ({
  activeName: "Пицца",
  categories: [
    {
      name: "Пицца",
      path: "pizza",
    },
    {
      name: "Десерты",
      path: "dessert",
    },
    {
      name: "Закуски",
      path: "snack",
    },
  ],
  setActiveName: (activeName) => set({ activeName }),
}));
