import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const BUTTON_CLASSES =
  "h-[76px] w-[170px] rounded-lg font-primary text-lg text-[var(--DarkNeutral1100)]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-3">
      <span className="font-primary text-base text-font-subtle">{label}</span>
      <IoInformationCircleOutline
        size={20}
        aria-hidden="true"
        className="text-font-subtle"
      />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-[68px] w-full rounded-md border border-border-bold bg-elevation-surface-overlay px-5 font-primary text-base text-font-subtle placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <IoSettingsOutline size={26} aria-hidden="true" className="text-font" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <IoChevronUp size={20} aria-hidden="true" className="text-font-subtle" />
      <p className="truncate font-primary text-base text-font-subtle">
        From entire frame to a singl…
      </p>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <IoChevronUp size={22} aria-hidden="true" className="text-font" />
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-10 flex gap-9">
      <button
        type="button"
        className={`${BUTTON_CLASSES} bg-[var(--Orange700)]`}
      >
        Awesome
      </button>
      <button
        type="button"
        className={`${BUTTON_CLASSES} bg-[var(--Orange800)]`}
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);
