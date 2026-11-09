import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

/**
 * Smoke-test card reproducing the "UI magician Agent" frame from Figma.
 * Self-contained: no props, no state, no data.
 *
 * The frame is a fixed dark panel whose near-black, greys and rust have no
 * semantic role in this design system, so the raw palette variables are used
 * as arbitrary values rather than new hex literals.
 */
const fieldInputClass =
  "mt-5 h-16 w-full rounded-none border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-6 font-primary text-[16px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]";

const actionButtonClass =
  "h-[70px] w-[170px] rounded-md bg-[var(--Orange800)] font-primary-bold text-[20px] text-[var(--DarkNeutral1000)]";

const fieldLabelClass = "font-primary text-[16px] text-[var(--DarkNeutral800)]";

const sectionHeadingClass =
  "font-primary-bold text-[22px] leading-none text-[var(--DarkNeutral1100)]";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className={fieldLabelClass}>
        {label}
      </label>
      <LuInfo
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]"
      />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={fieldInputClass} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[var(--DarkNeutral0)] px-10 pt-10 pb-32 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className={sectionHeadingClass}>UI magician Agent</h1>
      <LuSettings
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-[var(--DarkNeutral1100)]"
      />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <LuChevronUp
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]"
      />
      <span className="min-w-0 truncate font-primary text-[15px] text-[var(--DarkNeutral800)]">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-36">
      <h2 className={`flex items-center gap-3 ${sectionHeadingClass}`}>
        <LuChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
        Add New Design
      </h2>

      <div className="mt-14 flex flex-col gap-7">
        <Field
          id="figma-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="figma-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-16 flex gap-8">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={actionButtonClass}>
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className={`mt-24 ${sectionHeadingClass}`}>Recent Breakdowns</h2>
  </div>
);
