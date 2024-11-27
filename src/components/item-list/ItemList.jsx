import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map(({ name, id, packed }) => (
        <Item packed={packed} name={name} key={id} />
      ))}
    </ul>
  );
}
