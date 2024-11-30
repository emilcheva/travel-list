import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/item-list/ItemList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        {/* <ItemsContextProvider> */}
        <Header />
        <ItemList />
        <Sidebar />
        {/* </ItemsContextProvider> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
