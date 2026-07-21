import React from "react";
import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  const bg = { backgroundColor: "#2a2a2a" };
  const inputBg = { backgroundColor: "#3a3a3a", borderColor: "#5a5a5a", color: "#cccccc" };
  const mutedText = { color: "#c47b3a" };
  const btnStyle = { backgroundColor: "#b45309" };
  const textLight = { color: "#e5e5e5" };
  const textWhite = { color: "#ffffff" };

  return (
    <div id="testElem" style={bg} className="min-h-screen p-5 font-sans">

      {/* 1 — Header row */}
      <div className="flex items-center justify-between mb-4">
        <span style={textWhite} className="text-xl font-bold">UI magician Agent</span>
        <IoSettingsOutline style={textLight} size={24} />
      </div>

      {/* 2 — Collapsible row */}
      <div className="flex items-center gap-2 mb-8">
        <IoChevronUp style={mutedText} size={16} />
        <span style={mutedText} className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* 3 — Add New Design heading */}
      <div className="flex items-center gap-2 mb-6">
        <IoChevronUp style={textWhite} size={18} />
        <span style={textWhite} className="text-lg font-bold">Add New Design</span>
      </div>

      {/* 4 — Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <label style={textLight} className="text-sm font-semibold">Personal Access Token</label>
          <AiOutlineInfoCircle style={textLight} size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={inputBg}
          className="w-full rounded border px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* 5 — Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label style={textLight} className="text-sm font-semibold">Design URL</label>
          <AiOutlineInfoCircle style={textLight} size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputBg}
          className="w-full rounded border px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* 6 — Buttons */}
      <div className="flex gap-4 mb-10 justify-center">
        <button
          style={{ ...btnStyle, color: "#fff" }}
          className="rounded-xl px-8 py-3 text-sm font-semibold"
        >
          Awesome
        </button>
        <button
          style={{ ...btnStyle, color: "#fff" }}
          className="rounded-xl px-8 py-3 text-sm font-semibold"
        >
          Prepare
        </button>
      </div>

      {/* 7 — Recent Breakdowns */}
      <div>
        <span style={textWhite} className="text-xl font-bold">Recent Breakdowns</span>
      </div>

    </div>
  );
};

export default TestCard;
