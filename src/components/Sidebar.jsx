import AddItemForm from "./sidebar/AddItemForm";
import ButtonGroup from "./sidebar/ButtonGroup";
import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
