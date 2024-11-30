import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "id card",
    packed: false,
  },
  {
    id: 3,
    name: "phone",
    packed: false,
  },
  {
    id: 4,
    name: "phone charger",
    packed: false,
  },
];

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (name) => {
        const newItem = {
          id: new Date().getTime(),
          name,
          packed: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: id === item.id ? !item.packed : item.packed,
          }));
          return { items: newItems };
        });
      },
      removeAll: () => {
        set(() => ({ items: [] }));
      },
      resetInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));
          return { items: newItems };
        });
      },
      markAllIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: false,
          }));
          return { items: newItems };
        });
      },
    }),
    { name: "items" }
  )
);
