import Select from "react-select";
import Item from "./Item";
import { useMemo, useState } from "react";
import { useItemsStore } from "../../stores/itemsStore";

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

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const removeItem = useItemsStore((state) => state.removeItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

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
          onToggleItem={toggleItem}
          onRemoveItem={removeItem}
        />
      ))}
    </ul>
  );
}
