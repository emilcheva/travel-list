export default function Item({ name, packed, id, onRemoveItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={packed}
          type="checkbox"
          onChange={() => onToggleItem(id)}
        />
        {name}
      </label>

      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}
