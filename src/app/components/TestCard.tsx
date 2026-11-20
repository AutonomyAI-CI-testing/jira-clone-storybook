import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELDS = [
  {
    id: "testcard-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testcard-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const fieldClass =
  "mt-3 h-[56px] w-full rounded-md border border-[#8a8a8a] bg-[#1a1a1a] px-3.5 text-[15px] text-[#f0f0f0] placeholder:text-[#9a9a9a]";

const actionClass =
  "flex-1 rounded-md bg-[#a0431a] py-4 font-primary-bold text-[17px] text-[#e0e0e0]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 pb-16 pt-9 font-primary text-[#f0f0f0]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[22px] leading-7 text-[#f5f5f5]">
        UI magician Agent
      </h1>
      <span role="img" aria-label="Settings" className="text-[#d0d0d0]">
        <IoSettingsOutline size={22} />
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
      <IoChevronUpOutline size={18} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUpOutline
        size={22}
        aria-hidden="true"
        className="text-[#e8e8e8]"
      />
      <h2 className="font-primary-bold text-[21px] leading-7 text-[#f5f5f5]">
        Add New Design
      </h2>
    </div>

    {FIELDS.map(({ id, label, placeholder }) => (
      <div key={id} className="mt-7">
        <div className="flex items-center gap-2">
          <label
            htmlFor={id}
            className="font-primary-bold text-[16px] text-[#f5f5f5]"
          >
            {label}
          </label>
          <IoInformationCircleOutline
            size={18}
            aria-hidden="true"
            className="text-[#d0d0d0]"
          />
        </div>
        <input
          id={id}
          readOnly
          placeholder={placeholder}
          className={fieldClass}
        />
      </div>
    ))}

    <div className="mt-9 flex gap-8">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={actionClass}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-[19px] text-[#f5f5f5]">
      Recent Breakdowns
    </h2>
  </div>
);
