import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "Test Page - Simple (FOR TESTING)" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no data, no interactions.
 * The panel is intentionally theme-independent (it must read dark under any of
 * the app's themes), so it uses literal values from the frame rather than the
 * semantic token slots — the app's token slots all resolve per theme.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-10 pb-10 pt-9 font-primary text-[#c4c4c4]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[28px] leading-none">UI magician Agent</span>
      <HiOutlineCog size={28} className="text-[#c4c4c4]" />
    </div>

    <div className="mt-10 flex items-center gap-4">
      <HiOutlineChevronUp size={18} className="shrink-0 text-[#c4c4c4]" />
      <span className="truncate text-[22px] text-[#b0b0b0]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-4">
      <HiOutlineChevronUp size={20} className="shrink-0 text-[#c4c4c4]" />
      <span className="text-[26px] leading-none">Add New Design</span>
    </div>

    <Field
      className="mt-16"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      borderClass="border-[#a5adad]"
    />
    <Field
      className="mt-7"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      borderClass="border-[#c9c9c9]"
    />

    <div className="mt-14 flex gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[169px] rounded-md bg-[#8a3a17] text-[19px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <p className="mt-24 text-[26px] leading-none">Recent Breakdowns</p>
  </div>
);

const Field = ({
  label,
  placeholder,
  borderClass,
  className,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <span className="text-[19px]">{label}</span>
      <HiOutlineInformationCircle size={22} className="text-[#c4c4c4]" />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className={`mt-7 h-[72px] w-full border-2 bg-[#272822] px-9 text-[19px] text-[#c4c4c4] placeholder:text-[#737470] ${borderClass}`}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  /** Border colour utility, e.g. `border-[#a5adad]`. */
  borderClass: string;
  className?: string;
}
