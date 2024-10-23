import { useState } from "react";
import { Counter } from "./components/common/counter/Counter";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import {FetchingData} from "./components/pages/fetchingData/FetchingData";
import { ItemDetailContainer } from "./components/pages/itemDetail/itemDetailContainer";

function App() {
  
  const [ darkMode, setDarkMode] = useState(true);
  const cambiarModo = () =>{
    setDarkMode( !darkMode );
  };

  return (
    <>
    <button onClick={cambiarModo}>Cambiar Modo</button>
      <Navbar darkMode = {darkMode} />
      < ItemListContainer greeting="Bienvenido!" darkMode = {darkMode}/>
      <ItemDetailContainer/>
      <FetchingData />
      <Footer />
      <Counter />
    </>
  );
}

export default App
