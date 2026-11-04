import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-6 py-8 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-black text-2xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex shrink-0 items-center justify-center text-[color:var(--DarkNeutral900)]"
      >
        <IoSettingsOutline aria-hidden className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3">
      <IoChevronUp aria-hidden className="h-4 w-4 shrink-0" />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <IoChevronUp
        aria-hidden
        className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral1100)]"
      />
      <h2 className="font-primary-black text-2xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-token" className="text-lg">
          Personal Access Token
        </label>
        <IoInformationCircleOutline aria-hidden className="h-5 w-5 shrink-0" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-border-bold bg-transparent p-3 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-url" className="text-lg">
          Design URL
        </label>
        <IoInformationCircleOutline aria-hidden className="h-5 w-5 shrink-0" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-border-bold bg-transparent p-3 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-8 py-3 text-lg text-[color:var(--DarkNeutral1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-8 py-3 text-lg text-[color:var(--DarkNeutral1000)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-black text-2xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
