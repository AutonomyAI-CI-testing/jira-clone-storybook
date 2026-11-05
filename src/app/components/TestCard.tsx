import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no data. The root element
 * carries a pinned `dark` theme class because the frame is a fixed dark panel
 * and must not follow the app theme.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 pb-36 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <HiOutlineCog size={28} className="text-icon" />
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <HiChevronUp size={20} />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-40 flex items-center gap-3 font-primary-black text-3xl">
      <HiChevronUp size={26} />
      Add New Design
    </h2>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-6"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex justify-center gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[170px] rounded-md bg-[var(--Orange800)] font-primary text-xl text-font-subtle hover:bg-[var(--Orange700)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-black text-3xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <span className="text-xl">{label}</span>
      <HiOutlineInformationCircle size={26} className="text-icon" />
    </div>
    <input
      placeholder={placeholder}
      className="mt-6 h-16 w-full rounded-none border border-border-bold bg-transparent px-9 font-primary-light text-xl text-font placeholder:text-font-subtle"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
