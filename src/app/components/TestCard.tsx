import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-full rounded-md bg-[var(--Orange700)] px-4 py-4 font-primary text-lg text-white hover:bg-[var(--Orange800)] active:bg-[var(--Orange900)]"
  >
    {children}
  </button>
);

interface ActionButtonProps {
  children: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-lg text-font">
        {label}
      </label>
      <HiInformationCircle aria-hidden size={22} className="text-font" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-5 w-full rounded border-2 border-border-bold bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtlest"
    />
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
    className="dark w-[508px] rounded-md border border-border bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded-full p-1 text-font hover:bg-background-neutral-hovered"
      >
        <HiCog aria-hidden size={24} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2 text-lg text-font-subtle">
      <HiChevronUp aria-hidden size={22} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-2">
      <HiChevronUp aria-hidden size={26} />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-12 space-y-10">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-12 grid grid-cols-2 gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
