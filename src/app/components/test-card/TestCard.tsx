import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-bold text-base">
        {label}
      </label>
      <MdInfoOutline
        size={18}
        aria-hidden
        className="text-[var(--DarkNeutral800)]"
      />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-2 h-16 w-full rounded-md border border-[var(--DarkNeutral500)] bg-transparent px-4 font-primary-light text-base outline-none placeholder:text-[var(--DarkNeutral600)]"
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
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-10 text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <MdSettings
        size={26}
        aria-hidden
        className="text-[var(--DarkNeutral900)]"
      />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[var(--DarkNeutral600)]">
      <MdKeyboardArrowUp size={22} aria-hidden />
      <span className="truncate text-base">From entire frame to a singl…</span>
    </div>

    <div className="mt-[170px] flex items-center gap-2">
      <MdKeyboardArrowUp size={26} aria-hidden />
      <h3 className="font-primary-bold text-[22px]">Add New Design</h3>
    </div>

    <div className="mt-9 flex flex-col gap-6">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-9">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-16 w-[170px] rounded-md bg-[var(--Orange800)] font-primary-bold text-base text-[var(--DarkNeutral1000)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[110px] font-primary-bold text-[22px]">
      Recent Breakdowns
    </h3>
  </div>
);
