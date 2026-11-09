import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const fieldClassName =
  "h-14 rounded border border-border-bold bg-background-input px-5 font-primary-light text-sm text-font placeholder:text-font-subtlest";

const accentButtonClassName =
  "h-14 w-[168px] rounded bg-[var(--Orange800)] font-primary-bold text-[color:var(--Orange200)] hover:bg-[var(--Orange700)]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-base">
          {label}
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          className="text-icon-subtle"
        />
      </div>
      <input
        id={id}
        readOnly
        placeholder={placeholder}
        className={fieldClassName}
      />
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col gap-8 bg-elevation-surface px-10 py-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-lg">UI magician Agent</span>
        <button
          type="button"
          aria-label="Settings"
          className="rounded-full p-1 text-icon-subtle outline outline-2 outline-transparent hover:outline-border-brand"
        >
          <IoSettingsOutline aria-hidden="true" className="text-2xl" />
        </button>
      </div>

      <div className="-mt-5 flex items-center gap-2 text-font-subtle">
        <IoChevronUp aria-hidden="true" />
        <span className="truncate text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <IoChevronUp aria-hidden="true" />
          <span className="font-primary-bold text-lg">Add New Design</span>
        </div>

        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />

        <Field
          id="test-card-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="flex items-center gap-9 pl-12">
          <button type="button" className={accentButtonClassName}>
            Awesome
          </button>
          <button type="button" className={accentButtonClassName}>
            Prepare
          </button>
        </div>
      </div>

      <span className="mt-8 font-primary-bold text-lg">Recent Breakdowns</span>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
