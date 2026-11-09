import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <FiSettings aria-hidden="true" size={22} className="text-font-subtle" />
    </div>

    <div className="mt-9 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden="true" size={18} />
      <span className="text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" size={20} />
      <h3 className="font-primary-black text-xl">Add New Design</h3>
    </div>

    <div className="mt-14 flex flex-col gap-9">
      <Field
        id="access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-5 flex gap-[34px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-32 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-sm text-font-subtle">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={18} className="text-font-subtle" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-5 h-14 w-full rounded border border-border-bold bg-background-input px-4 text-sm placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="h-12 w-[170px] rounded-md bg-[var(--Orange800)] text-base text-white"
  >
    {children}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
