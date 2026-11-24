import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * TestCard is a self-contained smoke-test reproduction of an external Figma
 * design (the "UI magician Agent" panel). It takes no props and holds no state —
 * the inputs and buttons are inert visuals.
 *
 * The reference palette — near-black greys with a burnt-orange action colour —
 * has no equivalent in this app's semantic token set, so the colours below are
 * literal values read off the reference image rather than `background-*` /
 * `font-*` / `border-*` tokens. That is deliberate and scoped to this one
 * smoke-test file; product components style from tokens.
 */

const inputClass =
  "mt-3 h-[72px] w-full rounded-md border border-[#8f8f8f] bg-[#2b2b2b] px-9 text-[17px] text-[#d5d5d5] placeholder:text-[#6f6f6f]";

const buttonClass =
  "h-[66px] w-[170px] rounded-md bg-[#a3441a] text-[19px] text-[#c4b5a8]";

const chevronClass = "h-5 w-5 shrink-0";

const sectionHeadingClass =
  "flex items-center gap-3 font-primary-bold text-[21px] text-[#f0f0f0]";

const Field = ({
  className,
  id,
  label,
  placeholder,
}: FieldProps): JSX.Element => (
  <div className={cx(className)}>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-[17px] text-[#d5d5d5]">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        className="h-6 w-6 shrink-0 text-[#d5d5d5]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#242424] px-[42px] pt-[44px] pb-[60px] font-primary"
    >
      <header className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[19px] text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <HiOutlineCog
          role="img"
          aria-label="Settings"
          className="h-7 w-7 text-[#d0d0d0]"
        />
      </header>

      <div className="mt-9 flex items-center gap-3 text-[17px] text-[#b5b5b5]">
        <HiChevronUp aria-hidden className={chevronClass} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <h2 className={cx("mt-40", sectionHeadingClass)}>
        <HiChevronUp aria-hidden className={chevronClass} />
        Add New Design
      </h2>

      <Field
        className="mt-14"
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-9"
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-10 flex justify-end gap-[38px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className={cx("mt-[104px]", sectionHeadingClass)}>
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  placeholder: string;
}
