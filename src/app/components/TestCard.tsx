import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const buttonClass =
  "cursor-pointer rounded-sm bg-[var(--Orange800)] px-8 py-3 font-primary text-sm text-[var(--DarkNeutral1000)]";

const inputClass =
  "w-full rounded-sm border border-solid border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] p-3 font-primary-light text-sm text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary text-sm text-[var(--DarkNeutral900)]"
      >
        {label}
      </label>
      <MdInfoOutline size={18} className="text-[var(--DarkNeutral600)]" />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={inputClass} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained by design: no props, no state, no behaviour.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col gap-6 rounded-sm bg-[var(--DarkNeutral0)] p-6 text-[var(--DarkNeutral1100)]"
  >
    <header className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        title="Settings"
        className="cursor-pointer text-[var(--DarkNeutral800)]"
      >
        <MdSettings size={22} />
      </button>
    </header>

    <div className="flex items-center gap-2 text-[var(--DarkNeutral600)]">
      <MdKeyboardArrowUp size={20} className="shrink-0" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="flex items-center gap-2 font-primary-bold text-lg">
      <MdKeyboardArrowUp size={22} className="shrink-0" />
      Add New Design
    </h2>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="flex gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="font-primary-bold text-lg text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);
