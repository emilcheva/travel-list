import Item from "./Item";

export default function ItemList({ items, handleRemoveItem }) {
  return (
    <ul>
      {items.map(({ name, id, packed }) => (
        <Item
          id={id}
          packed={packed}
          name={name}
          key={id}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
}
