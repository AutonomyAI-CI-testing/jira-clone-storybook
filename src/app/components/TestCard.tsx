import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSNAME =
  "mt-3 w-full rounded-md border-none bg-background-input p-3 text-lg text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-lg text-font-subtle">{label}</span>
      <FiInfo aria-hidden="true" size={24} className="text-font-subtle" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={FIELD_CLASSNAME}
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex-1 rounded-lg bg-[color:var(--Orange800)] px-6 py-5 font-primary-bold text-xl"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 pb-24 pt-8 font-primary-light text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl">UI magician Agent</span>
      <FiSettings aria-hidden="true" size={26} className="text-font-subtle" />
    </div>

    <div className="mt-10 flex items-center gap-4">
      <FiChevronUp aria-hidden="true" size={22} className="text-font-subtle" />
      <span className="truncate text-lg text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" size={26} />
      <span className="font-primary-bold text-2xl">Add New Design</span>
    </div>

    <div className="mt-14">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />
    </div>

    <div className="mx-auto mt-16 flex w-full max-w-[372px] gap-8">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <div className="mt-28 font-primary-bold text-2xl">Recent Breakdowns</div>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
