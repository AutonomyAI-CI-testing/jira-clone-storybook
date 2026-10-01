import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";

const inputClassName =
  "mt-2 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] px-3 py-3 font-primary-light text-sm text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral600)]";

const buttonClassName =
  "rounded-md bg-[var(--Orange800)] px-8 py-2.5 font-primary-bold text-sm text-[var(--Orange200)]";

const fieldLabelClassName =
  "flex items-center gap-2 font-primary-light text-sm text-[var(--DarkNeutral900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[380px] rounded-xl bg-[var(--DarkNeutral0)] p-7 font-primary text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        UI magician Agent
      </h1>
      <BsGear className="h-5 w-5 text-[var(--DarkNeutral800)]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <BsChevronUp className="h-3.5 w-3.5 shrink-0 text-[var(--DarkNeutral700)]" />
      <span className="truncate font-primary-light text-sm text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-12 flex items-center gap-2 font-primary-bold text-lg text-[var(--DarkNeutral1000)]">
      <BsChevronUp className="h-4 w-4 shrink-0" />
      Add New Design
    </h2>

    <label className="mt-7 block">
      <span className={fieldLabelClassName}>
        Personal Access Token
        <BsInfoCircle className="h-4 w-4 text-[var(--DarkNeutral700)]" />
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />
    </label>

    <label className="mt-6 block">
      <span className={fieldLabelClassName}>
        Design URL
        <BsInfoCircle className="h-4 w-4 text-[var(--DarkNeutral700)]" />
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={inputClassName}
      />
    </label>

    <div className="mt-7 flex gap-8">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-lg text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
