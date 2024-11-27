import AddItemForm from "./sidebar/AddItemForm";
import ButtonGroup from "./sidebar/ButtonGroup";

export default function Sidebar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
