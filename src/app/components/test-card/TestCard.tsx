import { useState } from "react";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={`transition-transform ${open ? "rotate-0" : "-rotate-90"}`}
  >
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 1.5v1.4M8 13.1v1.4M14.5 8h-1.4M2.9 8H1.5M12.4 3.6l-1 1M4.6 11.4l-1 1M12.4 12.4l-1-1M4.6 4.6l-1-1"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M6 5.5v3M6 3.7v.1"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
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
      style={{ fontFamily: "Inter, sans-serif" }}
      className="w-full max-w-sm rounded-md bg-[#1c1c1a] p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      <button
        type="button"
        onClick={() => setIsInfoOpen((prev) => !prev)}
        className="mt-6 flex items-center gap-2 text-[#8b9291]"
      >
        <ChevronIcon open={isInfoOpen} />
        <span className="text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </button>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setIsAddNewOpen((prev) => !prev)}
          className="flex items-center gap-2 text-[#b2b2b1]"
        >
          <ChevronIcon open={isAddNewOpen} />
          <span className="text-[13.5px] font-semibold">Add New Design</span>
        </button>

        {isAddNewOpen && (
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[#a4a4a3]">
                <span className="text-[11.5px] font-semibold">
                  Personal Access Token
                </span>
                <InfoIcon />
              </div>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[#a3a3a2]">
                <span className="text-[11.5px] font-semibold">
                  Design URL
                </span>
                <InfoIcon />
              </div>
              <input
                type="text"
                value={designUrl}
                onChange={(e) => setDesignUrl(e.target.value)}
                placeholder="https://www.figma.com/file/:"
                className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
