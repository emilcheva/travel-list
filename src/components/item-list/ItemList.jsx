import Item from "./Item";

export default function ItemList({
  items,
  handleRemoveItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && (
        <div className="empty-state">
          <p>Empty Packing List</p>
        </div>
      )}

      {items.map(({ name, id, packed }) => (
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
