import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const panelClass =
  "w-[508px] bg-[#1c1c1c] px-10 py-8 font-primary text-[#d6d6d6]";
const sectionRowClass = "flex items-center gap-3 text-[22px] text-[#b8b8b8]";
const headingBaseClass = "font-primary-bold leading-none";
const fieldLabelClass = "font-primary-bold text-[22px] text-[#cfcfcf]";
const fieldInputClass =
  "mt-4 h-16 w-full border border-[#8f8f8f] bg-[#2b2b2b] px-4 text-[20px] text-[#d6d6d6] placeholder:text-[#8a8a8a]";
const actionClass =
  "h-[85px] w-[178px] rounded-lg bg-[#8f3d1a] text-[26px] text-[#a89a94]";

const fields = [
  {
    id: "testElem-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={panelClass}>
      <div className="flex items-start justify-between">
        <h2 className={cx(headingBaseClass, "text-[26px] text-[#d6d6d6]")}>
          UI magician Agent
        </h2>
        <HiOutlineCog aria-hidden="true" size={32} />
      </div>

      <div className={cx(sectionRowClass, "mt-6")}>
        <HiChevronUp aria-hidden="true" size={22} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="h-[150px]" aria-hidden="true" />

      <div className="flex items-center gap-3">
        <HiChevronUp aria-hidden="true" size={26} />
        <h3 className={cx(headingBaseClass, "text-[28px] text-[#e6e6e6]")}>
          Add New Design
        </h3>
      </div>

      {fields.map(({ id, label, placeholder }) => (
        <div key={id} className="mt-10">
          <div className="flex items-center gap-3">
            <label htmlFor={id} className={fieldLabelClass}>
              {label}
            </label>
            <HiOutlineInformationCircle aria-hidden="true" size={22} />
          </div>
          <input
            id={id}
            readOnly
            placeholder={placeholder}
            className={fieldInputClass}
          />
        </div>
      ))}

      <div className="mt-10 flex gap-6">
        {actions.map((label) => (
          <button key={label} type="button" className={actionClass}>
            {label}
          </button>
        ))}
      </div>

      <h3 className={cx(headingBaseClass, "mt-16 text-[26px] text-[#d6d6d6]")}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
