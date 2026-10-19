import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const fields = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    value: "figd_xxxxxxxxxxxxxxxxxx",
    labelClassName: "text-[#a4a4a3]",
    inputClassName: "h-9 border border-[#a5adad] text-[11.5px] text-[#737470]",
  },
  {
    id: "test-card-url",
    label: "Design URL",
    value: "https://www.figma.com/file/:",
    labelClassName: "text-[#a3a3a2]",
    inputClassName:
      "h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e]",
  },
];

const buttons = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <RiSettings3Line size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowUpSLine size={14} className="shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <RiArrowUpSLine size={14} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {fields.map((field) => (
      <div key={field.id}>
        <div className="mt-[28px] flex items-center gap-2">
          <label
            htmlFor={field.id}
            className={`text-[11.5px] leading-[14px] ${field.labelClassName}`}
          >
            {field.label}
          </label>
          <RiInformationLine
            size={15}
            className={`shrink-0 ${field.labelClassName}`}
          />
        </div>
        <input
          id={field.id}
          readOnly
          defaultValue={field.value}
          className={`mt-3 w-full bg-[#272822] px-2 outline-none ${field.inputClassName}`}
        />
      </div>
    ))}

    <div className="mt-5 flex justify-end gap-4">
      {buttons.map((button) => (
        <button
          key={button}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          {button}
        </button>
      ))}
    </div>

    <h2 className="mt-12 text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
