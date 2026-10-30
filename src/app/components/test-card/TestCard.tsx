import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static mock of the "UI magician Agent" panel from the referenced Figma frame.
 * Self-contained smoke test: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-icon-subtle hover:text-icon"
      >
        <IoSettingsOutline size={26} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUp
        aria-hidden
        size={20}
        className="shrink-0 text-font-subtle"
      />
      <span className="truncate text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-40" />

    <div className="flex items-center gap-3">
      <IoChevronUp aria-hidden size={20} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-12 space-y-10">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h3 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-font-subtle">
        {label}
      </label>
      <IoInformationCircleOutline
        aria-hidden
        size={18}
        className="text-icon-subtle"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-border-bold bg-background-input p-4 text-font placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="w-[170px] cursor-pointer rounded-md bg-[#a8471a] py-4 text-font-inverse hover:bg-[#8f3c16]"
  >
    {label}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
