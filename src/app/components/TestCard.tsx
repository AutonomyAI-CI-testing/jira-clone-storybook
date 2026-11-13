import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const BUTTON_LABELS = ["Awesome", "Prepare"];

const INPUT_CLASSES =
  "mt-3 h-[64px] w-full rounded border border-[#7a7a7a] bg-[#1d1d1d] px-6 font-primary text-[20px] text-[#6f6f6f] placeholder:text-[#6f6f6f]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#141414] px-10 pb-32 pt-8 font-primary text-[#c7c7c7]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] leading-tight">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings">
        <HiOutlineCog size={30} />
      </button>
    </div>

    <div className="mt-7 flex min-w-0 items-center gap-3">
      <HiChevronUp size={24} className="shrink-0" />
      <span className="truncate text-[22px] text-[#8a8a8a]">
        From entire frame to a single component
      </span>
    </div>

    <h2 className="mt-[160px] flex items-center gap-3 font-primary-bold text-[26px]">
      <HiChevronUp size={26} className="shrink-0" />
      Add New Design
    </h2>

    {FIELDS.map(({ label, placeholder }) => (
      <div key={label} className="mt-12">
        <div className="flex items-center gap-4">
          <span className="font-primary-bold text-[21px] text-[#a8a8a8]">
            {label}
          </span>
          <HiOutlineInformationCircle
            size={26}
            className="shrink-0 text-[#a8a8a8]"
          />
        </div>
        <input readOnly placeholder={placeholder} className={INPUT_CLASSES} />
      </div>
    ))}

    <div className="mt-5 flex gap-9">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[70px] w-[170px] rounded-[8px] bg-[#8a3d1a] font-primary-bold text-[21px] text-[#b3a49c]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-32 font-primary-bold text-[26px]">Recent Breakdowns</h2>
  </div>
);
