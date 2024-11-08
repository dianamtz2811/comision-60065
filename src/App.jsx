import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer"
import { CartContainer } from "./components/pages/cart/CartContainer"
import { Navbar } from "./components/layout/navbar/Navbar"
import Checkout from "./components/pages/checkout/Checkout"
import { CartContextProvider } from "./components/context/CartContext"
import { Toaster } from "sonner"


function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center" expand={false} richColors />
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App
