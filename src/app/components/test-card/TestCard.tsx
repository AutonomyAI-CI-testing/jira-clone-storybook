import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const RECENT_BREAKDOWNS = [
  { id: "test-page-simple", name: "Test Page - Simple", meta: "12 frames" },
  { id: "design-system", name: "Design System", meta: "8 frames" },
];

// Smoke test only: this panel intentionally does not use the repo's semantic
// design tokens or shared Button/icons components. It is a one-off recreation of
// a Figma frame, not a design-system component - do not "correct" it toward the
// tokens or reuse it as a pattern.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-10 py-8 text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-[22px] leading-tight">
        UI magician Agent
      </h1>
      <FiSettings
        size={26}
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-[#c9c9c9]"
      />
    </div>

    <div className="mt-7 flex items-center gap-3 text-[17px] text-[#cfcfcf]">
      <FiChevronUp size={22} aria-hidden="true" className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp size={24} aria-hidden="true" className="shrink-0" />
      <h2 className="font-primary-bold text-[22px] leading-tight">
        Add New Design
      </h2>
    </div>

    <div className="mt-9 space-y-7">
      {FIELDS.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-3">
            <label
              htmlFor={field.id}
              className="text-[18px] leading-tight text-[#d4d4d4]"
            >
              {field.label}
            </label>
            <FiInfo
              size={22}
              aria-hidden="true"
              className="shrink-0 text-[#c9c9c9]"
            />
          </div>
          <input
            id={field.id}
            type="text"
            readOnly
            placeholder={field.placeholder}
            className="mt-4 h-[68px] w-full rounded-[3px] border border-[#6b6b6b] bg-[#1f1f1f] px-6 text-[18px] text-[#e6e6e6] placeholder:text-[#8c8c8c]"
          />
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-8">
      <button
        type="button"
        className="h-[76px] w-[172px] rounded-[4px] bg-[#a8431c] text-[20px] text-[#f0dcd2]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[76px] w-[172px] rounded-[4px] bg-[#a8431c] text-[20px] text-[#f0dcd2]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-[22px] leading-tight">
      Recent Breakdowns
    </h2>
    <ul className="mt-5 space-y-3">
      {RECENT_BREAKDOWNS.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between gap-4 rounded-[3px] bg-[#1f1f1f] px-5 py-4"
        >
          <span className="text-[16px] text-[#e6e6e6]">{item.name}</span>
          <span className="text-[14px] text-[#8c8c8c]">{item.meta}</span>
        </li>
      ))}
    </ul>
  </div>
);
