import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[420px] rounded-md bg-elevation-surface-sunken p-6 text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
        >
          <IoSettingsOutline className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2 text-font-subtle">
        <IoChevronUpOutline className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <IoChevronUpOutline className="h-5 w-5 shrink-0" aria-hidden="true" />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <div className="mt-8 space-y-5">
        <Field
          id="test-card-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-4">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="flex-1 rounded-lg bg-[var(--Orange800)] px-4 py-4 font-primary-bold text-lg text-font-inverse hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm">
        {label}
      </label>
      <IoInformationCircleOutline
        className="h-4 w-4 text-icon-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded-md border border-border-bold bg-elevation-surface-raised p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
