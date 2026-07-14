import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-sm bg-[#1e1e1e] px-5 py-6 font-sans">

      {/* ── Header row ────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-[#aaa]" size={22} />
      </div>

      {/* ── Subheader: chevron + muted text ───────────── */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-[#c4622d]" size={16} />
        <span className="text-sm text-[#c4622d]">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ────────────────────────────────────── */}
      <div className="mt-10" />

      {/* ── Section heading: Add New Design ───────────── */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-white" size={18} />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* ── Personal Access Token ─────────────────────── */}
      <div className="mt-5">
        <div className="mb-1.5 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#ccc]">
            Personal Access Token
          </label>
          <FiInfo className="text-[#888]" size={15} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#888] placeholder-[#666] outline-none focus:border-[#777]"
        />
      </div>

      {/* ── Design URL ────────────────────────────────── */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#ccc]">
            Design URL
          </label>
          <FiInfo className="text-[#888]" size={15} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#777] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#888] placeholder-[#666] outline-none focus:border-[#999]"
        />
      </div>

      {/* ── Action buttons ────────────────────────────── */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b5451b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c94f20] active:bg-[#9e3c17]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5451b] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c94f20] active:bg-[#9e3c17]">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ─────────────────────────── */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
