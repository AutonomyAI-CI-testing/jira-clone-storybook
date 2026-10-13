import { HiChevronUp, HiInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold">
        {label}
      </label>
      <HiInformationCircle aria-hidden className="h-4 w-4 text-icon" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded-sm border border-border-input bg-background-input px-3 py-2 text-sm placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[360px] rounded-md bg-elevation-surface p-4 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <IoSettingsOutline aria-hidden className="h-5 w-5 text-icon" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <HiChevronUp aria-hidden className="h-4 w-4 shrink-0" />
      <span className="min-w-0 truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <HiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-3 font-primary-bold text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange800)] px-4 py-3 font-primary-bold text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-10 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
