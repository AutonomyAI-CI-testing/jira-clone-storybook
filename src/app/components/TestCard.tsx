import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test component. Self-contained, takes no props and holds no state —
 * it reproduces the supplied "UI magician Agent" frame as static markup.
 *
 * The frame's palette is off-register for this repo (dark neutral panel with a
 * rust accent), so it is expressed with the raw palette variables already
 * declared in `app.css` rather than by adding new semantic tokens.
 */

const COLLAPSIBLE_LABEL = "From entire frame to a single component";

const ACTIONS = ["Awesome", "Prepare"];

const FIELD_CLASSES =
  "rounded-md bg-[var(--DarkNeutral250)] p-4 text-xl text-[var(--DarkNeutral1100)] outline outline-2 outline-[var(--DarkNeutral400)] placeholder:text-[var(--DarkNeutral700)]";

const ACTION_CLASSES =
  "rounded bg-[var(--Red800)] px-10 py-5 text-xl text-[var(--DarkNeutral1100)] hover:bg-[var(--Red700)]";

const SectionHeading = ({ children }: { children: string }): JSX.Element => (
  <h2 className="flex items-center gap-3 font-primary-bold text-2xl">
    <IoChevronUp aria-hidden />
    <span>{children}</span>
  </h2>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <label className="font-primary-bold text-xl" htmlFor={id}>
        {label}
      </label>
      <IoInformationCircleOutline
        aria-hidden
        className="text-[var(--DarkNeutral700)]"
      />
    </div>
    <input className={FIELD_CLASSES} id={id} placeholder={placeholder} type="text" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] p-10 font-primary text-[var(--DarkNeutral1100)]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-3xl">UI magician Agent</h1>
      <button
        aria-label="Settings"
        className="text-2xl text-[var(--DarkNeutral1100)]"
        type="button"
      >
        <IoSettingsOutline aria-hidden />
      </button>
    </div>

    <p className="mt-9 flex items-center gap-3 text-xl text-[var(--DarkNeutral700)]">
      <IoChevronUp aria-hidden className="shrink-0" />
      <span className="min-w-0 truncate">{COLLAPSIBLE_LABEL}</span>
    </p>

    <div className="mt-40 flex flex-col gap-14">
      <SectionHeading>Add New Design</SectionHeading>
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-end gap-8">
      {ACTIONS.map((action) => (
        <button className={ACTION_CLASSES} key={action} type="button">
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
