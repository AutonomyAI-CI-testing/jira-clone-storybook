import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

interface TestFieldProps {
  label: string;
  placeholder: string;
  className: string;
}

const TestField = ({
  label,
  placeholder,
  className,
}: TestFieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3 text-lg">
      <span>{label}</span>
      <HiOutlineInformationCircle size={20} />
    </div>
    <div className="mt-4 flex h-[72px] w-full items-center rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-5 text-lg text-[var(--DarkNeutral800)]">
      {placeholder}
    </div>
  </div>
);

const buttonClass =
  "min-w-[170px] rounded bg-[var(--Orange800)] px-10 py-5 text-lg text-[var(--Orange400)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-12 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <HiOutlineCog size={24} className="text-[var(--DarkNeutral800)]" />
    </div>

    <div className="mt-8 flex items-center gap-3 text-lg text-[var(--DarkNeutral800)]">
      <HiChevronUp size={20} />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="mt-36 flex items-center gap-3 font-primary-bold text-2xl">
      <HiChevronUp size={22} />
      <span>Add New Design</span>
    </h2>

    <TestField
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />

    <TestField
      className="mt-6"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex items-center justify-center gap-8">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
