import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const FIELDS = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const BUTTON_LABELS = ["Awesome", "Prepare"];

const FIELD_INPUT_CLASS =
  "mt-4 h-[71px] w-full rounded-sm border border-[#6b6b6b] bg-[#2b2b2b] px-4 text-[20px] text-[#e3e3e3] placeholder:text-[#8f8f8f] focus:outline-none";

const BUTTON_CLASS =
  "h-[74px] w-[171px] rounded-md bg-[#8c3c1e] text-[20px] text-[#a5a5a5]";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex w-[508px] flex-col bg-[#1e1e1e] px-6 py-7 font-primary text-[#e3e3e3]">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none text-[#e3e3e3]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center justify-center text-[#d8d8d8]"
        >
          <HiOutlineCog size={26} />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <HiOutlineChevronUp
          size={20}
          aria-hidden="true"
          className="shrink-0 text-[#d8d8d8]"
        />
        <p className="min-w-0 flex-1 truncate text-[20px] text-[#9a9a9a]">
          From entire frame to a single component and its nested variants
        </p>
      </div>

      <div className="mt-[140px] flex items-center gap-3">
        <HiOutlineChevronUp
          size={22}
          aria-hidden="true"
          className="shrink-0 text-[#d8d8d8]"
        />
        <h2 className="font-primary-bold text-[22px] text-[#e3e3e3]">
          Add New Design
        </h2>
      </div>

      {FIELDS.map(({ id, label, placeholder }, index) => (
        <div className={index === 0 ? "mt-10" : "mt-6"} key={id}>
          <div className="flex items-center gap-4">
            <label
              htmlFor={id}
              className="font-primary-bold text-[20px] text-[#d8d8d8]"
            >
              {label}
            </label>
            <HiOutlineInformationCircle
              size={22}
              aria-hidden="true"
              className="text-[#d8d8d8]"
            />
          </div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={FIELD_INPUT_CLASS}
          />
        </div>
      ))}

      <div className="mt-11 flex gap-9">
        {BUTTON_LABELS.map((label) => (
          <button type="button" className={BUTTON_CLASS} key={label}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-[100px] font-primary-bold text-[24px] text-[#cfcfcf]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
