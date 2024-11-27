import AddItemForm from "./sidebar/AddItemForm";
import ButtonGroup from "./sidebar/ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleResetInitial,
  handleRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        onMarkAllComplete={handleMarkAllComplete}
        onMarkAllIncomplete={handleMarkAllIncomplete}
        onResetInitial={handleResetInitial}
        onRemoveAll={handleRemoveAllItems}
      />
    </div>
  );
}
