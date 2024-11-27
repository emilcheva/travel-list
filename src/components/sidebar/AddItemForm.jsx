import { useState, useRef } from "react";
import Button from "../Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    const newItem = { name: itemText, packed: false, id: new Date().getTime() };
    setItems((prev) => [...prev, newItem]);
    setItemText("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add and item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="toothbrush..."
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button className="btn">Add to list</Button>
    </form>
  );
}
