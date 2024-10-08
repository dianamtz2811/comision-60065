import { Counter } from "./components/common/counter/Counter";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      < ItemListContainer greeting="Bienvenido!" />
      <Footer />
      <Counter />
    </div>
  );
}

export default App
