import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

// The reference panel is a dark surface with warm-orange buttons. Neither colour
// exists in this repo's token palette, so they are literals here on purpose: this
// card is a self-contained smoke test and is never rendered inside the app.
const INPUT_CLASS =
  "mt-8 h-[65px] w-full rounded-md border-2 border-[#4d4d4d] bg-[#232323] text-center text-[24px] text-[#8e8e8e] placeholder:text-[#8e8e8e]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 pb-24 pt-10 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[28px] text-[#c9c9c9]">
        UI magician Agent
      </h2>
      <FiSettings aria-hidden size={40} className="text-[#c9c9c9]" />
    </div>

    <CollapsibleRow
      label="From entire frame to a singl..."
      className="mt-7"
      textClassName="text-[28px] text-[#8e8e8e]"
    />

    <CollapsibleRow
      label="Add New Design"
      className="mt-36"
      textClassName="font-primary-bold text-[30px] text-[#d0d0d0]"
    />

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-12"
    />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-6"
    />

    <div className="mt-14 flex gap-9">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[73px] w-[171px] rounded bg-[#8f3f1c] font-primary text-[28px] text-[#9c9088]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-[30px] text-[#c9c9c9]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({
  label,
  placeholder,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <span className="text-[26px] text-[#c9c9c9]">{label}</span>
      <FiInfo aria-hidden size={26} className="text-[#d0d0d0]" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

const CollapsibleRow = ({
  label,
  className = "",
  textClassName = "",
}: CollapsibleRowProps): JSX.Element => (
  <div className={cx("flex items-center gap-4", className)}>
    <FiChevronUp aria-hidden size={34} className="shrink-0" />
    <span className={cx("truncate", textClassName)}>{label}</span>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

interface CollapsibleRowProps {
  label: string;
  className?: string;
  textClassName?: string;
}
