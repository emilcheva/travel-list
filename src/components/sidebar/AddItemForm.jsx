import Button from "../Button";

export default function AddItemForm() {
  return (
    <form>
      <h2>Add and item</h2>
      <input type="text"></input>
      <Button className="btn">Add to list</Button>
    </form>
  );
}
