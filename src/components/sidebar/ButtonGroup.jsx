import Button from "../Button";

export default function ButtonGroup({
  onMarkAllComplete,
  onMarkAllIncomplete,
  onResetInitial,
  onRemoveAll,
}) {
  const secondaryBtns = [
    { text: "Mark all as complete", onClick: onMarkAllComplete },
    { text: "Mark all as incomplete", onClick: onMarkAllIncomplete },
    { text: "Reset to initial", onClick: onResetInitial },
    { text: "Remove all items", onClick: onRemoveAll },
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
