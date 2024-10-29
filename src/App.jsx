import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer"
import { CartContainer } from "./components/pages/cart/CartContainer"
import { Navbar } from "./components/layout/navbar/Navbar"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer/>} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
