import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const HEADER_TITLE = "UI magician Agent";
const COLLAPSE_LABEL = "From entire frame to a single component";
const SECTION_TITLE = "Add New Design";
const FOOTER_TITLE = "Recent Breakdowns";

const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] p-6 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-white">{HEADER_TITLE}</h1>
      <IoSettingsOutline size={22} className="text-[#c9c9c9]" aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#c9c9c9]">
      <IoChevronUp size={18} className="shrink-0" aria-hidden />
      <span className="min-w-0 max-w-[360px] truncate">{COLLAPSE_LABEL}</span>
    </div>

    <h2 className="mt-12 flex items-center gap-2 font-primary-black text-2xl text-white">
      <IoChevronUp size={20} className="shrink-0" aria-hidden />
      {SECTION_TITLE}
    </h2>

    <div className="mt-6 flex flex-col gap-4">
      {FIELDS.map((field) => (
        <div key={field.label} className="flex flex-col gap-2">
          <span className="flex items-center gap-2">
            {field.label}
            <IoInformationCircleOutline
              size={18}
              className="text-[#8a8a8a]"
              aria-hidden
            />
          </span>
          <input
            readOnly
            aria-label={field.label}
            placeholder={field.placeholder}
            className="w-full rounded border-2 border-[#6b6b6b] bg-[#2b2b2b] px-3 py-3 text-[#8a8a8a] outline-none placeholder:text-[#8a8a8a]"
          />
        </div>
      ))}
    </div>

    <div className="mt-6 flex gap-5">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 rounded bg-[#a04a2b] px-6 py-3 font-primary-bold text-white"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-black text-2xl text-white">
      {FOOTER_TITLE}
    </h2>
  </div>
);
