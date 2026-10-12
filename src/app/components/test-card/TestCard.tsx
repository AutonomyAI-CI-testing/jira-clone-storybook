import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[380px] max-w-full flex-col gap-6 rounded-lg border border-border bg-elevation-surface-raised p-4 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-2">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <FiSettings size={20} className="text-icon-subtle" aria-hidden />
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={16} aria-hidden />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={18} className="text-icon-subtle" aria-hidden />
      <h3 className="font-primary-bold text-base">Add New Design</h3>
    </div>

    <div className="flex flex-col gap-4">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
      />
    </div>

    <div className="flex gap-3">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="font-primary-bold text-base">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm text-font-subtle">
        {label}
      </label>
      <FiInfo size={14} className="text-icon-subtle" aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border bg-background-input px-3 py-2 text-sm text-font placeholder:text-font-subtlest focus:border-border-focused focus:outline-none"
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    type="button"
    className="flex-1 rounded bg-background-warning-bold px-4 py-2 font-primary-bold text-font-inverse"
  >
    <span className="opacity-70">{children}</span>
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}
