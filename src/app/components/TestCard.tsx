import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const BUTTON_CLASS =
  "cursor-pointer rounded-lg bg-[color:var(--Orange800)] px-6 py-2 text-font-inverse hover:bg-[color:var(--Orange700)] active:bg-[color:var(--Orange900)]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-2">
      {label}
      <IoInformationCircleOutline size={18} className="text-font-subtle" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-md border border-border-bold bg-background-input p-3 text-font placeholder:text-font-subtlest"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 rounded-lg bg-elevation-surface-sunken p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <IoSettingsOutline size={22} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-sm text-font-subtlest">
      <IoChevronUpOutline size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <IoChevronUpOutline size={22} className="shrink-0" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-4">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
