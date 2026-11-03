import cx from "classix";
import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

// The frame is a fixed-look dark panel, so every colour is declared explicitly
// instead of resolving through a theme token (Pin-Only-When-Fixed rule).
const inputClass =
  "mt-7 h-[70px] w-full border border-[#6b6b6b] bg-[#2c2c2c] px-9 font-primary text-lg text-[#d4d4d4] placeholder:text-[#9a9a9a] hover:border-[#8a8a8a]";

const buttonClass =
  "h-[74px] w-[170px] cursor-pointer rounded-md bg-[#a04a1a] font-primary text-lg text-[#b8b8b8] hover:bg-[#8f4116] active:bg-[#7d3912]";

const SectionHeading = ({
  variant,
  className,
  children,
}: SectionHeadingProps): JSX.Element => (
  <div className={cx("flex items-center gap-3", className)}>
    <RiArrowUpSLine size={28} className="shrink-0" aria-hidden="true" />
    <span
      className={
        variant === "collapsed"
          ? "font-primary text-lg text-[#b8b8b8]"
          : "font-primary-bold text-2xl leading-none"
      }
    >
      {children}
    </span>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="font-primary text-lg">
        {label}
      </label>
      <RiInformationLine size={26} className="shrink-0" aria-hidden="true" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-[#1e1e1e] px-10 pb-40 pt-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl leading-none">
        UI magician Agent
      </span>
      <RiSettings3Line size={30} className="shrink-0" aria-hidden="true" />
    </div>

    <SectionHeading variant="collapsed" className="mt-8">
      From entire frame to a singl...
    </SectionHeading>

    <SectionHeading variant="heading" className="mt-40">
      Add New Design
    </SectionHeading>

    <Field
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-14"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-8"
    />

    <div className="mt-14 flex items-center justify-center gap-9">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-16 block font-primary-bold text-2xl leading-none">
      Recent Breakdowns
    </span>
  </div>
);

interface SectionHeadingProps {
  variant: "heading" | "collapsed";
  className?: string;
  children: React.ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
