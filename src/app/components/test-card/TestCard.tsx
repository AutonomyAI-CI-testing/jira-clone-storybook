import { HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";
import { IoChevronUp } from "react-icons/io5";

const ACTION_LABELS = ["Awesome", "Prepare"];

const TestCardField = ({
  label,
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 text-font-subtle">
      <span className="text-sm">{label}</span>
      <HiOutlineInformationCircle aria-hidden className="h-4 w-4 text-icon" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-12 w-full rounded-md border border-border-bold bg-transparent px-3 text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col gap-8 bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <HiOutlineCog aria-hidden className="h-6 w-6 text-icon" />
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <IoChevronUp aria-hidden className="h-4 w-4" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <IoChevronUp aria-hidden className="h-5 w-5 text-icon" />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      <TestCardField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <TestCardField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="rounded-md bg-[var(--Orange800)] px-6 py-3 text-font-inverse"
          >
            {label}
          </button>
        ))}
      </div>
    </div>

    <h3 className="font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}
