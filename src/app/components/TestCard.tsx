import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdOutlineSettings } from "react-icons/md";

const ACTIONS = ["Awesome", "Prepare"] as const;

const BUTTON_CLASSES =
  "h-16 w-[169px] rounded-lg bg-[var(--Orange800)] font-primary text-base text-font hover:bg-[var(--Orange900)]";

const INPUT_CLASSES =
  "mt-3 h-16 w-full rounded border border-border-bold bg-elevation-surface-raised px-5 text-base text-font placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-2xl text-font">UI magician Agent</h2>
      <button type="button" aria-label="Open settings" className="text-icon">
        <MdOutlineSettings size={26} />
      </button>
    </div>

    <button
      type="button"
      aria-label="Expand collapsed description"
      className="mt-6 flex w-full items-center gap-2 text-left text-base text-font-subtle"
    >
      <MdKeyboardArrowUp size={22} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </button>

    <div className="mt-16 flex items-center gap-2">
      <MdKeyboardArrowUp size={26} className="shrink-0 text-font" />
      <h3 className="font-primary-black text-xl text-font">Add New Design</h3>
    </div>

    <div className="mt-8 space-y-6">
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
    </div>

    <div className="mt-12 flex justify-center gap-9">
      {ACTIONS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-black text-xl text-font">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-base text-font">
        {label}
      </label>
      <HiOutlineInformationCircle size={20} className="text-font" />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className={INPUT_CLASSES}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
