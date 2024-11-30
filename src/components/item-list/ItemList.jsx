import Select from "react-select";
import Item from "./Item";
import { useState } from "react";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList({
  items,
  handleRemoveItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }

    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 && (
        <div className="empty-state">
          <p>Empty Packing List</p>
        </div>
      )}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map(({ name, id, packed }) => (
        <Item
          id={id}
          packed={packed}
          name={name}
          key={id}
          onToggleItem={handleToggleItem}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
}
