import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full max-w-sm mx-auto p-6 flex flex-col gap-6 text-neutral-200"
      style={{ background: "#2a2a2a" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <HiCog className="text-neutral-400 text-2xl" />
      </div>

      {/* Collapsed subtitle row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-neutral-400 text-sm" />
        <span className="text-sm" style={{ color: "#c4713a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-4">
        <HiChevronUp className="text-neutral-200 text-lg" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-neutral-300">Personal Access Token</label>
          <HiInformationCircle className="text-neutral-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded-md px-3 py-3 text-sm text-neutral-400 placeholder-neutral-500 outline-none"
          style={{ background: "#3a3a3a", border: "1px solid #555" }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-neutral-300">Design URL</label>
          <HiInformationCircle className="text-neutral-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded-md px-3 py-3 text-sm text-neutral-400 placeholder-neutral-500 outline-none"
          style={{ background: "#3a3a3a", border: "1px solid #555" }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center">
        <button
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
          style={{ background: "#b35c2a" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
          style={{ background: "#b35c2a" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
