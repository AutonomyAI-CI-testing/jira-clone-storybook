import React, { useState } from "react";
import {
  HiOutlineCog,
  HiChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const TestCard: React.FC = () => {
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      className="flex flex-col text-[#e8ddd5]"
      style={{
        backgroundColor: "#282420",
        width: "300px",
        padding: "22px 20px 32px",
      }}
    >
      {/* ── Header ── */}
      <div className="flex justify-between items-center" style={{ marginBottom: "6px" }}>
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <HiOutlineCog
          className="text-gray-400 flex-shrink-0"
          style={{ fontSize: "22px" }}
        />
      </div>

      {/* ── Subtitle / collapsed section ── */}
      <div className="flex items-center gap-1" style={{ marginBottom: "64px" }}>
        <HiChevronUp
          className="text-gray-400 flex-shrink-0"
          style={{ fontSize: "14px" }}
        />
        <span className="text-sm truncate" style={{ color: "#8aaa74" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section header ── */}
      <div className="flex items-center gap-2" style={{ marginBottom: "20px" }}>
        <HiChevronUp
          className="text-white flex-shrink-0"
          style={{ fontSize: "14px" }}
        />
        <h2 className="text-lg font-semibold text-white">Add New Design</h2>
      </div>

      {/* ── Personal Access Token ── */}
      <div style={{ marginBottom: "16px" }}>
        <div className="flex items-center gap-1" style={{ marginBottom: "8px" }}>
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <HiOutlineInformationCircle
            className="text-gray-400 flex-shrink-0"
            style={{ fontSize: "16px" }}
          />
        </div>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full text-sm outline-none"
          style={{
            backgroundColor: "#1e1b18",
            border: "1px solid #4a4038",
            borderRadius: "4px",
            padding: "12px 14px",
            color: "#888",
          }}
        />
      </div>

      {/* ── Design URL ── */}
      <div style={{ marginBottom: "24px" }}>
        <div className="flex items-center gap-1" style={{ marginBottom: "8px" }}>
          <span className="text-sm text-gray-300">Design URL</span>
          <HiOutlineInformationCircle
            className="text-gray-400 flex-shrink-0"
            style={{ fontSize: "16px" }}
          />
        </div>
        <input
          type="text"
          id="designUrl"
          value={designUrl}
          onChange={(e) => setDesignUrl(e.target.value)}
          placeholder="https://www.figma.com/file/:"
          className="w-full text-sm outline-none"
          style={{
            backgroundColor: "#1e1b18",
            border: "1px solid #4a4038",
            borderRadius: "4px",
            padding: "12px 14px",
            color: "#888",
          }}
        />
      </div>

      {/* ── Buttons ── */}
      <div className="flex gap-3" style={{ marginBottom: "64px" }}>
        <button
          className="flex-1 font-semibold text-white text-sm"
          style={{
            backgroundColor: "#a04820",
            borderRadius: "10px",
            padding: "13px 0",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 font-semibold text-white text-sm"
          style={{
            backgroundColor: "#a04820",
            borderRadius: "10px",
            padding: "13px 0",
          }}
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <h3 className="text-xl font-semibold text-white">Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
