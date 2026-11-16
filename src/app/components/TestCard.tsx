import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a static reproduction of the "UI magician Agent" settings panel
 * from the attached Figma frame (254x508). Deliberately self-contained: no
 * props, no state, no data, and no route renders it.
 *
 * Colours and type sizes are the design's own values rather than this app's
 * tokens, because that palette is not part of the app's theme contract.
 */

type FieldVariant = "idle" | "active";

const fieldInputStyle = (variant: FieldVariant) =>
  cx(
    "mt-3 w-full bg-[#272822] px-[18px]",
    variant === "active"
      ? "h-[37px] border-2 border-[#929291] text-[10.5px] placeholder:text-[#71726e]"
      : "h-[36px] border border-[#a5adad] text-[11.5px] placeholder:text-[#737470]"
  );

const Field = ({
  label,
  placeholder,
  variant,
}: {
  label: string;
  placeholder: string;
  variant: FieldVariant;
}) => (
  <div>
    <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
      <span>{label}</span>
      <FiInfo aria-hidden="true" size={15} />
    </div>
    <input
      aria-label={label}
      className={fieldInputStyle(variant)}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const buttonStyle =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

const actions = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    className="flex h-[508px] w-[254px] flex-col bg-[#1c1d17] px-5 pt-5 font-primary-bold text-[13.5px] text-[#b5b5b5]"
    id="testElem"
  >
    <div className="flex items-start justify-between">
      <span>UI magician Agent</span>
      <FiSettings aria-hidden="true" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <FiChevronUp aria-hidden="true" size={10} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[60px] flex items-center gap-2 text-[13.5px] text-[#b2b2b1]">
      <FiChevronUp aria-hidden="true" size={12} />
      <span>Add New Design</span>
    </div>

    <div className="mt-7">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" variant="idle" />
    </div>

    <div className="mt-[11px]">
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" variant="active" />
    </div>

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      {actions.map((label) => (
        <button className={buttonStyle} key={label} type="button">
          {label}
        </button>
      ))}
    </div>

    <p className="mt-[46px] text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</p>
  </div>
);
