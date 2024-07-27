import React from "react";
import Icon from "./Icon";

export default function MidArea({ droppedItems, onDrop, onDragOver, onDeleteItem, onItemClick }) {
  return (
    <div
      className="flex-1 h-full overflow-auto p-5"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <h2 className="text-xl font-bold text-center w-full mb-4 text-black-500 border border-green-700 rounded-lg">Mid Area</h2>
      {droppedItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex flex-row items-center bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded"
          style={{ width: 'fit-content' }}
          onClick={() => onItemClick(item)}
        >
          <span className="mr-2">{item.text}</span>
          {item.icon && <Icon name={item.icon} size={15} className="text-white mr-2" />}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteItem(index);
            }}
            className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 hover:bg-red-600 focus:outline-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
