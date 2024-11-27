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

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
      </main>

      <Footer />
    </>
  );
}

export default App;
