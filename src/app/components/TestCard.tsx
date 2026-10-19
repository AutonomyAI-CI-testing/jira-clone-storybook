import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test card reproducing the "UI magician Agent" panel from the attached
 * Figma frame. Self-contained: no props, no state, no data.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-9 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <HiOutlineCog aria-hidden className="shrink-0 text-2xl" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <HiOutlineChevronUp aria-hidden className="shrink-0 text-xl" />
        <span className="text-lg text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-[120px]">
        <div className="flex items-center gap-3">
          <HiOutlineChevronUp aria-hidden className="shrink-0 text-2xl" />
          <h2 className="font-primary-bold text-2xl">Add New Design</h2>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <LabeledField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          />
          <LabeledField
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-8 flex gap-8">
          <button type="button" className={buttonStyle}>
            Awesome
          </button>
          <button type="button" className={buttonStyle}>
            Prepare
          </button>
        </div>
      </section>

      <h2 className="mt-[100px] font-primary-bold text-2xl text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const buttonStyle =
  "flex-1 rounded-md bg-[var(--Orange800)] px-4 py-5 font-primary text-lg text-[#e6c8b8]";

const LabeledField = ({ label, placeholder }: LabeledFieldProps) => (
  <label className="block">
    <span className="mb-3 flex items-center gap-3 text-lg">
      {label}
      <HiOutlineInformationCircle
        aria-hidden
        className="shrink-0 text-xl text-[var(--DarkNeutral700)]"
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-5 py-5 font-primary-light text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </label>
);

interface LabeledFieldProps {
  label: string;
  placeholder: string;
}
