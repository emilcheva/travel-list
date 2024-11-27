import { useState } from "react";

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/item-list/ItemList";
import Sidebar from "./components/Sidebar";

const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "id card",
    packed: false,
  },
  {
    id: 3,
    name: "toothbrush",
    packed: false,
  },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const handleMarkAllComplete = () => {
    const completeItems = items.map((item) => ({ ...item, packed: true }));
    setItems(completeItems);
  };

  const handleMarkAllIncomplete = () => {
    const completeItems = items.map((item) => ({ ...item, packed: false }));
    setItems(completeItems);
  };

  const handleResetInitial = () => {
    setItems(initialItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllIncomplete={handleMarkAllIncomplete}
          handleResetInitial={handleResetInitial}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
