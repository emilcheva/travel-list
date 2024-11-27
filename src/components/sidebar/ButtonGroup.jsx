import Button from "../Button";

const secondaryBtns = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryBtns.map((btn) => (
        <Button key={btn} type="secondary">
          {btn}
        </Button>
      ))}
    </section>
  );
}
