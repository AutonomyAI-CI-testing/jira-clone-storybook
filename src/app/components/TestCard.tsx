import cx from "classix";
import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Smoke-test component: a static, self-contained reproduction of the attached
 * design frame. Colours are approximate and deliberately reference the raw
 * palette variables so the panel keeps its dark look in any theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[color:var(--DarkNeutral100)] px-10 py-8 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <MdSettings
        size={24}
        className="mt-1 shrink-0 text-[color:var(--DarkNeutral900)]"
      />
    </div>

    <div className="mt-4 flex min-w-0 items-center gap-2">
      <MdKeyboardArrowUp
        size={22}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
      <span className="truncate text-lg text-[color:var(--DarkNeutral800)]">
        From entire frame to a single frame
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <MdKeyboardArrowUp
        size={24}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      />
      <h2 className="font-primary-bold text-2xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      borderClassName="border-[color:var(--DarkNeutral500)]"
    />

    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      borderClassName="border-[color:var(--DarkNeutral700)]"
    />

    <div className="mt-6 flex gap-5">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded bg-[color:var(--Orange800)] py-3 text-lg text-[color:var(--Red300)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-2xl text-[color:var(--DarkNeutral900)]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ id, label, placeholder, borderClassName }: FieldProps) => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-lg text-[color:var(--DarkNeutral800)]">
        {label}
      </label>
      <MdInfoOutline
        size={18}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-2 w-full rounded border bg-[color:var(--DarkNeutral200)] px-4 py-3 text-lg",
        "text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral600)]",
        borderClassName
      )}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClassName: string;
}

export default TestCard;
