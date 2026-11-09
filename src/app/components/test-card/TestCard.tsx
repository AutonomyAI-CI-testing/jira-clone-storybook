import { HiChevronUp, HiInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

const FIELD_CLASSES =
  "h-16 rounded border border-border-bold bg-background-input px-4 font-primary text-base text-font placeholder:text-font-subtlest";

const ACTION_CLASSES =
  "h-16 w-[170px] rounded bg-[var(--Orange800)] font-primary text-lg text-white hover:bg-[var(--Orange700)]";

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base text-font-subtle">
        {label}
      </label>
      <HiInformationCircle aria-hidden className="text-lg text-font-subtle" />
    </div>
    <input id={id} placeholder={placeholder} className={FIELD_CLASSES} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <MdSettings aria-hidden className="text-2xl text-font-subtle" />
    </div>

    <button
      type="button"
      className="mt-10 flex items-center gap-2 text-left text-base text-font-subtle"
    >
      <HiChevronUp aria-hidden className="shrink-0 text-lg" />
      <span className="truncate">From entire frame to a singl...</span>
    </button>

    <button type="button" className="mt-36 flex items-center gap-2 text-left">
      <HiChevronUp aria-hidden className="shrink-0 text-2xl" />
      <span className="font-primary-black text-2xl">Add New Design</span>
    </button>

    <div className="mt-12 flex flex-col gap-10">
      <Field
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-14 flex gap-9">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION_CLASSES}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
