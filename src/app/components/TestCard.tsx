import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * One labelled field: a label with an info icon above a placeholder-only input.
 * Rendered twice by TestCard, so it lives here rather than being duplicated.
 */
const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-3">
    <span className="flex items-center gap-2 text-[15px] text-[#c8c8c8]">
      {label}
      <FiInfo aria-hidden size={18} className="shrink-0" />
    </span>

    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-5 py-4 text-base text-[#d4d4d4] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[508px] bg-[#1e1e1e] p-6 font-primary text-[#d4d4d4]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden size={26} className="shrink-0 text-[#b0b0b0]" />
      </div>

      {/* Collapsed section row */}
      <div className="mt-10 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
        <FiChevronUp aria-hidden size={18} className="shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <section className="mt-20">
        <h2 className="flex items-center gap-2 font-primary-bold text-xl">
          <FiChevronUp aria-hidden size={20} className="shrink-0" />
          Add New Design
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
          <Field label="Design URL" placeholder="https://www.figma.com/file/" />
        </div>

        <div className="mt-10 flex gap-5">
          <button
            type="button"
            className="min-w-[150px] rounded-md bg-[#a04a26] px-8 py-4 text-lg text-[#c0a89c]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[150px] rounded-md bg-[#a04a26] px-8 py-4 text-lg text-[#c0a89c]"
          >
            Prepare
          </button>
        </div>
      </section>

      {/* Recent Breakdowns */}
      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
