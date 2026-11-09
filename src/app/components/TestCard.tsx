import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

const FIELDS = [
  {
    id: "testcard-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testcard-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const BUTTONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#141414] px-10 py-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[#d9d9d9]"
      >
        <LuSettings className="h-7 w-7" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[19px] text-[#c9c9c9]">
      <LuChevronUp className="h-5 w-5 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[140px] flex items-center gap-3 font-primary-bold text-[22px]">
      <LuChevronUp className="h-[22px] w-[22px] shrink-0" />
      <span>Add New Design</span>
    </div>

    <div className="mt-[60px] flex flex-col gap-9">
      {FIELDS.map((field) => (
        <div key={field.id} className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <label htmlFor={field.id} className="text-[20px] text-[#c9c9c9]">
              {field.label}
            </label>
            <LuInfo
              aria-label={`More information about ${field.label}`}
              className="h-[22px] w-[22px] shrink-0 text-[#c9c9c9]"
            />
          </div>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className="h-[72px] w-full rounded border border-[#8f8f8f] bg-[#232323] px-[38px] text-[19px] text-[#8a8a8a] placeholder:text-[#8a8a8a]"
          />
        </div>
      ))}
    </div>

    <div className="mt-[75px] flex justify-end gap-[35px]">
      {BUTTONS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[171px] rounded-md bg-[#b04f18] text-[19px] text-[#d9d9d9]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[150px] font-primary-bold text-[22px]">
      Recent Breakdowns
    </h2>
  </div>
);
