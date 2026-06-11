import React from "react";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-6 max-w-[360px] mx-auto"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-lg" style={{ color: "#b5b5b5" }}>UI magician Agent</h1>
        <span className="text-xl" style={{ color: "#b5b5b5" }}>⚙</span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span style={{ color: "#8b9291" }}>^</span>
        <p className="text-sm" style={{ color: "#8b9291" }}>From entire frame to a singl...</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span style={{ color: "#b2b2b1" }}>^</span>
        <h2 className="text-xl font-bold" style={{ color: "#b2b2b1" }}>Add New Design</h2>
      </div>

      <div className="mb-4">
        <label
          htmlFor="pat"
          className="text-sm flex items-center gap-1 mb-2"
          style={{ color: "#a4a4a3" }}
        >
          Personal Access Token <span className="text-xs">ℹ</span>
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #555",
            color: "#737470",
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="design-url"
          className="text-sm flex items-center gap-1 mb-2"
          style={{ color: "#a4a4a3" }}
        >
          Design URL <span className="text-xs">ℹ</span>
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #555",
            color: "#71726e",
          }}
        />
      </div>

      <div className="flex gap-4 justify-center mb-8">
        <button
          className="font-semibold py-3 px-6 rounded-xl"
          style={{ backgroundColor: "#c1622f", color: "#fff" }}
        >
          Awesome
        </button>
        <button
          className="font-semibold py-3 px-6 rounded-xl"
          style={{ backgroundColor: "#c1622f", color: "#fff" }}
        >
          Prepare
        </button>
      </div>

      <h2 className="text-xl font-bold" style={{ color: "#b0b0b0" }}>Recent Breakdowns</h2>
    </div>
  );
};