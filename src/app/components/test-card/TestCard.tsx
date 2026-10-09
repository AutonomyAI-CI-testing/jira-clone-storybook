import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "w-full rounded border border-input bg-background-input px-3 py-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand";

const ACTION_CLASSES =
  "rounded bg-[#A6472B] px-6 py-2 text-font hover:bg-[#8F3D25]";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="dark flex w-[400px] max-w-full flex-col gap-6 rounded-md bg-elevation-surface p-5 text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <FiSettings className="h-5 w-5 shrink-0 text-icon-subtle" aria-hidden />
      </div>

      <div className="flex items-center gap-2 text-font-subtle">
        <FiChevronUp className="h-4 w-4 shrink-0" aria-hidden />
        <span className="truncate">From entire frame to a singl…</span>
      </div>

      <div className="flex items-center gap-2">
        <FiChevronUp className="h-5 w-5 shrink-0" aria-hidden />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-5">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="mb-2 flex items-center gap-2 text-font-subtle"
    >
      {label}
      <FiInfo className="h-4 w-4 shrink-0" aria-hidden />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_CLASSES}
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps) => (
  <button type="button" className={ACTION_CLASSES}>
    {children}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: string;
}
