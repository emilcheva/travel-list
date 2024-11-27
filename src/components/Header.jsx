import Counter from "./Counter";

export default function Header({ total, packed }) {
  return (
    <header>
      <Counter total={total} packed={packed} />
    </header>
  );
}
