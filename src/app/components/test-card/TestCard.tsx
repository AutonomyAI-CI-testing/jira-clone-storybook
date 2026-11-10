import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1917] px-10 pt-9 pb-16 font-primary text-[#d6d3d1]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[17px]">UI magician Agent</h2>
        <FiSettings size={22} aria-hidden="true" className="mt-0.5 shrink-0" />
      </div>

      <div className="mt-5 flex items-center gap-2.5 pl-3 text-[15px] text-[#a8a29e]">
        <FiChevronUp size={20} aria-hidden="true" className="shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[60px] flex items-center gap-2.5 pl-3">
        <FiChevronUp size={22} aria-hidden="true" className="shrink-0" />
        <h3 className="font-primary-bold text-[19px]">Add New Design</h3>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        {FIELDS.map((field) => (
          <div key={field.label}>
            <div className="flex items-center gap-2.5">
              <span className="text-[15px]">{field.label}</span>
              <FiInfo size={16} aria-hidden="true" className="shrink-0" />
            </div>
            <input
              readOnly
              placeholder={field.placeholder}
              className="mt-2.5 h-12 w-full rounded border border-[color:#57534e] bg-transparent px-4 text-[15px] text-[#d6d3d1] placeholder:text-[#8a8580]"
            />
          </div>
        ))}
      </div>

      <div className="mt-7 flex justify-end gap-8">
        <button
          type="button"
          className="w-[170px] rounded-md bg-[#a03c14] py-3.5 text-[15px] text-[#e7d9d3]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-md bg-[#a03c14] py-3.5 text-[15px] text-[#e7d9d3]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[70px] font-primary-bold text-[19px]">
        Recent Breakdowns
      </h3>
    </div>
  );
}

export default TestCard;
