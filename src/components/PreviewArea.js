import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ catPosition, catRotation, catMessage, catSize, catVisible, onReset }) {
  return (
    <div className="flex-none w-full h-full overflow-y-auto p-2 flex flex-col items-center justify-center relative">
      <h2 className="text-xl font-bold text-center w-full mb-4 text-black-500 border border-green-700 rounded-lg" style={{ marginTop: '0.8rem' }}>
        Playground
      </h2>
      <button
        onClick={onReset}
        className="bg-red-500 text-white px-4 py-2 rounded absolute top-4 right-4" style={{ marginTop: '3rem' }}
      >
        Reset
      </button>
      <div className="flex-1 flex items-center justify-center relative">
        {catVisible && (
          <div
            style={{
              transform: `translate(${catPosition.x}px, ${catPosition.y}px) rotate(${catRotation}deg) scale(${catSize})`,
              transformOrigin: "center",
              position: "relative",
            }}
          >
            <CatSprite />
            {catMessage && (
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  left: "85%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  border: "1px solid black",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {catMessage}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
