import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Navbar from "./components/NavBar";

export default function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [catRotation, setCatRotation] = useState(0);
  const [catMessage, setCatMessage] = useState("");
  const [catSize, setCatSize] = useState(1);
  const [catVisible, setCatVisible] = useState(true);
  const originalCatPosition = { x: 0, y: 0 };

  const onDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("application/json"));
    setDroppedItems([...droppedItems, item]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDeleteItem = (indexToDelete) => {
    setDroppedItems(droppedItems.filter((_, index) => index !== indexToDelete));
  };

  const onItemClick = (item) => {
    if (item.id === "move right") {
      setCatPosition((prev) => ({ x: prev.x + 10, y: prev.y }));
    } else if (item.id === "move left") {
      setCatPosition((prev) => ({ x: prev.x - 10, y: prev.y }));
    } else if (item.id === "turnLeft") {
      setCatRotation((prev) => prev - 15);
    } else if (item.id === "turnRight") {
      setCatRotation((prev) => prev + 15);
    } else if (item.id === "changeX") {
      setCatPosition((prev) => ({ x: prev.x, y: prev.y + 10 }));
    } else if (item.id === "changeY") {
      setCatPosition((prev) => ({ x: prev.x, y: prev.y - 10 }));
    } else if (item.id === "sayHello") {
      setCatMessage("Hello");
    } else if (item.id === "sayHello2") {
      setCatMessage("Hello");
      setTimeout(() => {
        setCatMessage("");
      }, 2000);
    } else if (item.id === "sayHmm") {
      setCatMessage("Hmm...");
    } else if (item.id === "sayHmm2") {
      setCatMessage("Hmm...");
      setTimeout(() => {
        setCatMessage("");
      }, 2000);
    } else if (item.id === "changeSize") {
      setCatSize((prev) => prev + 0.1);
    } else if (item.id === "changeSize1") {
      setCatSize((prev) => prev - 0.1);
    } else if (item.id === "hide") {
      setCatVisible(false);
    } else if (item.id === "show") {
      setCatVisible(true);
    }
  };

  const resetCatPosition = () => {
    setCatPosition(originalCatPosition);
    setCatRotation(0);
    setCatSize(1);
    setCatVisible(true);
    setCatMessage("");
  };

  useEffect(() => {
    const handleGlobalDrop = (e) => {
      if (!e.target.closest('.flex-1.h-full.overflow-auto')) {
        e.preventDefault();
      }
    };

    document.addEventListener('drop', handleGlobalDrop);
    return () => {
      document.removeEventListener('drop', handleGlobalDrop);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar onItemClick={onItemClick} />
            <MidArea
              droppedItems={droppedItems}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDeleteItem={onDeleteItem}
              onItemClick={onItemClick}
            />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea
              catPosition={catPosition}
              catRotation={catRotation}
              catMessage={catMessage}
              catSize={catSize}
              catVisible={catVisible}
              onReset={resetCatPosition}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
