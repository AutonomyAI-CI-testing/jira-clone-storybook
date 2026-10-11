import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
];

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-black px-5 py-4 font-primary">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-white/70">
          UI magician Agent
        </h1>
        <FiSettings className="text-white/60" size={16} aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        <FiChevronUp
          className="shrink-0 text-white/50"
          size={12}
          aria-hidden="true"
        />
        <span className="text-xs font-semibold text-white/40">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-10 flex items-center gap-1.5">
        <FiChevronUp
          className="shrink-0 text-white/60"
          size={16}
          aria-hidden="true"
        />
        <h2 className="text-sm font-semibold text-white/70">Add New Design</h2>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {FIELDS.map(({ label, placeholder }) => (
          <label key={label} className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-white/50">
              {label}
              <FiInfo
                className="shrink-0 text-white/50"
                size={13}
                aria-hidden="true"
              />
            </span>
            <input
              readOnly
              placeholder={placeholder}
              className="w-full border border-white/40 bg-[#272822] px-3 py-2 text-xs text-white/40 placeholder:text-white/40"
            />
          </label>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-white/60"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold text-white/70">
        Recent Breakdowns
      </h2>
    </div>
  );
};
