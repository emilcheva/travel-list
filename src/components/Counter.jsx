import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";

export default function Counter() {
  const { items } = useContext(ItemsContext);
  return (
    <p>
      <b>{items.filter((item) => item.packed).length}</b> / {items.length} items
      packed
    </p>
  );
}
