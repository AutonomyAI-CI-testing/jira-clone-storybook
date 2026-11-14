import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const heading = "font-primary-bold text-[var(--DarkNeutral1100)]";

const input =
  "h-14 w-full rounded-md border border-[var(--DarkNeutral350)] bg-[var(--DarkNeutral200)] px-4 font-primary text-base text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral700)]";

const button =
  "flex-1 rounded-md bg-[var(--Orange800)] px-8 py-4 font-primary text-lg text-[var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] p-6 text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h1 className={cx(heading, "text-xl")}>UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded p-1 text-[var(--DarkNeutral900)] hover:bg-[var(--DarkNeutral200)]"
      >
        <FiSettings aria-hidden="true" size={22} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        size={20}
        className="text-[var(--DarkNeutral700)]"
      />
      <span className="font-primary-light text-base text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        size={22}
        className="text-[var(--DarkNeutral1100)]"
      />
      <h2 className={cx(heading, "text-lg")}>Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-4">
      <button type="button" className={button}>
        Awesome
      </button>
      <button type="button" className={button}>
        Prepare
      </button>
    </div>

    <h2 className={cx(heading, "mt-16 text-xl")}>Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary text-base">{label}</span>
      <FiInfo
        aria-hidden="true"
        size={16}
        className="text-[var(--DarkNeutral700)]"
      />
    </div>
    <input readOnly aria-label={label} placeholder={placeholder} className={input} />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
