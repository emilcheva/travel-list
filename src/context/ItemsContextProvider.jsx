import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
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

  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => ({
      ...item,
      packed: id === item.id ? !item.packed : item.packed,
    }));
    setItems(newItems);
  };

  const handleMarkAllComplete = () => {
    const completeItems = items.map((item) => ({ ...item, packed: true }));
    setItems(completeItems);
  };

  const handleMarkAllIncomplete = () => {
    const completeItems = items.map((item) => ({ ...item, packed: false }));
    setItems(completeItems);
  };

  const handleResetInitial = () => {
    setItems(initialItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetInitial,
        handleMarkAllComplete,
        handleMarkAllIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
