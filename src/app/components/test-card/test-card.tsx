import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="font-sans w-[254px] rounded-md bg-[#0d0d0c] p-5 text-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#b5b5b5]">UI magician Agent</span>
        <HiOutlineCog className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible-looking info row */}
      <div className="mt-3 flex items-center gap-2 text-[#8b9291]">
        <HiChevronUp className="h-4 w-4" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <HiChevronUp className="h-4 w-4 text-[#b2b2b1]" />
        <span className="font-semibold text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-1.5 text-[#a4a4a3]">
          <span className="font-semibold">Personal Access Token</span>
          <HiOutlineInformationCircle className="h-3.5 w-3.5" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-1.5 text-[#a3a3a2]">
          <span className="font-semibold">Design URL</span>
          <HiOutlineInformationCircle className="h-3.5 w-3.5" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          className="rounded px-4 py-2 font-semibold text-[#8c8078]"
          style={{ backgroundColor: "#843a17" }}
        >
          Awesome
        </button>
        <button
          className="rounded px-4 py-2 font-semibold text-[#8c8078]"
          style={{ backgroundColor: "#843a17" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div className="mt-8">
        <span className="font-semibold text-[#b0b0b0]">Recent Breakdowns</span>
        <div className="mt-4 h-12" />
      </div>
    </div>
  );
};
