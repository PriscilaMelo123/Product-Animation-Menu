import { useState } from "react";
import "../App.css";

function Menu() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentClass, setCurrentClass] = useState("");

  const menuItens = ["Calçado", "Bolsa", "Carteira", "Roupa"];

  const handleSelect = (index: number) => {
    const menuClosed = selectedItem;
    const currentIndex = index;

    if (menuClosed - currentIndex === 1) {
      setCurrentClass("item-left");
    } else if (menuClosed - currentIndex === -1) {
      setCurrentClass("item-right");
    } else {
      setCurrentClass(`selected-${menuClosed}-${currentIndex}`);
    }
    setSelectedItem(index);
  };

  return (
    <main>
      <div className="categorias">
        {menuItens.map((item, i) => (
          <button
            key={item}
            className={`${
              selectedItem === i ? "select selected-initial" : ""
            } ${currentClass}`}
            onClick={() => handleSelect(i)}
          >
            {item}
          </button>
        ))}
      </div>
    </main>
  );
}
export default Menu;
