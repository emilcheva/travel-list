import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/item-list/ItemList";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        {/* <ItemsContextProvider> */}
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content-wrapper">
          <ItemList />
          <Sidebar isOpen={isSidebarOpen} />
        </div>

        {/* </ItemsContextProvider> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
