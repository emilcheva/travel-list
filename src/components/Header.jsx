import Counter from "./Counter";

export default function Header({ isOpen, toggleSidebar }) {
  return (
    <header>
      <Counter />
      <button onClick={toggleSidebar} className="menu-button">
        {isOpen ? "Close" : "Menu"}
      </button>
    </header>
  );
}
