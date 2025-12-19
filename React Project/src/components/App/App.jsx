import { useState } from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/header.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Main from "../Main/Main.jsx";
import "./App.css";
import ModalwithForm from "../ModalwithForm/ModalwithForm";
import { defaultClothingItems } from "../../../utils/ClothingItems.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  return (
    <div className="app">
      <Header />
      <Main clothingItems={clothingItems} />
      <Footer />
      <ModalwithForm />
      <ItemModal />
    </div>
  );
}

export default App;
