import { IoInformationCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowUp, MdOutlineSettings } from "react-icons/md";

const buttonClass =
  "flex-1 rounded-md bg-[var(--Orange800)] py-4 text-[18px] text-[var(--DarkNeutral900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pt-8 pb-16 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[20px] font-primary-bold">UI magician Agent</h1>
      <MdOutlineSettings
        aria-hidden="true"
        className="text-[26px] text-[var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-4 flex items-center gap-1.5 text-[17px] text-[var(--DarkNeutral800)]">
      <MdKeyboardArrowUp aria-hidden="true" className="shrink-0 text-[20px]" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-24 flex items-center gap-1.5">
      <MdKeyboardArrowUp
        aria-hidden="true"
        className="shrink-0 text-[22px] text-[var(--DarkNeutral1100)]"
      />
      <h2 className="text-[20px] font-primary-bold">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClass}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-32 text-[18px] font-primary-bold">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const id = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-[16px]">
          {label}
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          className="text-[18px] text-[var(--DarkNeutral800)]"
        />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-4 py-3 text-[16px] outline-none placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
