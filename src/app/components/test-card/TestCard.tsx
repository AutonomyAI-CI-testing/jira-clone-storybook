import { useState } from "react";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    className={`shrink-0 transition-transform ${open ? "rotate-0" : "-rotate-90"}`}
  >
    <path
      d="M2 3.5L5 6.5L8 3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 1.5v1.4M8 13.1v1.4M14.5 8h-1.4M2.9 8H1.5M12.5 3.5l-1 1M4.5 11.5l-1 1M12.5 12.5l-1-1M4.5 4.5l-1-1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
    <path d="M6 5.3v3.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <circle cx="6" cy="3.6" r="0.6" fill="currentColor" />
  </svg>
);

export const TestCard = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isAddNewOpen, setIsAddNewOpen] = useState(true);
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded-md bg-[#1c1c1a] p-5 text-[#b5b5b5]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsible info row */}
      <button
        type="button"
        onClick={() => setIsInfoOpen((prev) => !prev)}
        className="mt-3 flex items-center gap-2 text-left text-[#8b9291]"
      >
        <ChevronIcon open={isInfoOpen} />
        <span className="text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </button>

      {/* Add New Design section */}
      <div className="mt-6">
        <button
          type="button"
          onClick={() => setIsAddNewOpen((prev) => !prev)}
          className="flex items-center gap-2 text-left text-[#b2b2b1]"
        >
          <ChevronIcon open={isAddNewOpen} />
          <span className="text-[13.5px] font-semibold">Add New Design</span>
        </button>

        {isAddNewOpen && (
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <div className="mb-1.5 flex items-center gap-1.5 text-[#a4a4a3]">
                <span className="text-[11.5px] font-semibold">
                  Personal Access Token
                </span>
                <InfoIcon />
              </div>
              <input
                type="text"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-1.5 text-[#a3a3a2]">
                <span className="text-[11.5px] font-semibold">Design URL</span>
                <InfoIcon />
              </div>
              <input
                type="text"
                value={designUrl}
                onChange={(event) => setDesignUrl(event.target.value)}
                placeholder="https://www.figma.com/file/:"
                className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
