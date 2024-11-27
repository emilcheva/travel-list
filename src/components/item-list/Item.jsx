export default function Item({ name, packed, id, onRemoveItem }) {
  return (
    <li className="item">
      <label>
        <input checked={packed} type="checkbox" />
        {name}
      </label>

      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}
