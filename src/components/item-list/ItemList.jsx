import { useState } from "react";
import Item from "./Item";

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
    name: "toothbrush",
    packed: false,
  },
];

export default function ItemList() {
  const [items] = useState(initialItems);

  return (
    <ul>
      {items.map(({ name, id, packed }) => (
        <Item packed={packed} name={name} key={id} />
      ))}
    </ul>
  );
}
