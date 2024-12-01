import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./sidebar/AddItemForm";
import ButtonGroup from "./sidebar/ButtonGroup";

export default function Sidebar({ isOpen }) {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <aside className={`aside ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar">
        <AddItemForm onAddItem={addItem} />
        <ButtonGroup />
      </div>
    </aside>
  );
}
