import React from "react";
import Icon from "./Icon";

export default function Sidebar({ onItemClick }) {
  const sidebarItems = [
    { id: "move right", text: "Move 1 steps right", category: "Motion" },
    { id: "move left", text: "Move 1 steps left", category: "Motion" },
    { id: "turnLeft", text: "Turn left 15 degrees", category: "Motion", icon: "undo" },
    { id: "turnRight", text: "Turn right 15 degrees", category: "Motion", icon: "redo" },
    { id: "changeX", text: "Move down by 1 step", category: "Motion" },
    { id: "changeY", text: "Move up by 1 step", category: "Motion" },
    { id: "sayHello", text: "Say hello", category: "Looks" },
    { id: "sayHello2", text: "Say hello for 2 seconds", category: "Looks" },
    { id: "sayHmm", text: "Say Hmm...", category: "Looks" },
    { id: "sayHmm2", text: "Say Hmm... for 2 seconds", category: "Looks" },
    { id: "changeSize", text: "Increase size of cat", category: "Looks" },
    { id: "changeSize1", text: "Decrease size of cat", category: "Looks" },
    { id: "show", text: "Show Cat", category: "Looks" },
    { id: "hide", text: "Hide Cat", category: "Looks" },
  ];

  const onDragStart = (e, item) => {
    e.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-4 border-r border-gray-200 bg-gray-100">
      <h2 className="text-xl font-bold text-center w-full mb-4 text-black-500 border border-green-700 rounded-lg" style={{ marginTop: '0.3rem' }}>
        Side Bar
      </h2>
      {Object.entries(sidebarItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
      }, {})).map(([category, items]) => (
        <div key={category} className="mb-4">
          <div className="font-bold text-lg mb-2">{category}</div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-blue-500 text-white px-4 py-2 mb-2 text-sm cursor-pointer rounded shadow"
              draggable
              onDragStart={(e) => onDragStart(e, item)}
              onClick={() => onItemClick(item)}
            >
              {item.text}
              {item.icon && <Icon name={item.icon} size={15} className="ml-2" />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
