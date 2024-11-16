import { create } from 'zustand'

interface IState {
  activeName: string
  setActiveName: (activeId: string) => void
}

export const useCategoryStore = create<IState>()((set) => ({
  activeName: 'Пицца',
  setActiveName: (activeName) => set({ activeName })
}))