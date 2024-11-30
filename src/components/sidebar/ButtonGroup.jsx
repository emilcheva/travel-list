import Button from "../Button";
import { useItemsStore } from "../../stores/itemsStore";

export default function ButtonGroup() {
  const markAllComplete = useItemsStore((state) => state.markAllComplete);
  const markAllIncomplete = useItemsStore((state) => state.markAllIncomplete);
  const resetInitial = useItemsStore((state) => state.resetInitial);
  const removeAll = useItemsStore((state) => state.removeAll);

  const secondaryBtns = [
    { text: "Mark all as complete", onClick: markAllComplete },
    { text: "Mark all as incomplete", onClick: markAllIncomplete },
    { text: "Reset to initial", onClick: resetInitial },
    { text: "Remove all items", onClick: removeAll },
  ];

  return (
    <section className="button-group">
      {secondaryBtns.map(({ text, onClick }) => (
        <Button key={text} btnType="secondary" onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  );
}
