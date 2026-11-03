import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const fieldClass =
  "w-full rounded-md border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-4 py-6 font-primary text-base text-white outline-none placeholder:text-[var(--DarkNeutral800)]";

const buttonClass =
  "rounded-lg bg-[var(--Orange800)] py-4 font-primary-bold text-lg text-white";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] p-10 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="flex h-8 w-8 items-center justify-center"
      >
        <RiSettings3Line aria-hidden size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <RiArrowUpSLine aria-hidden size={24} className="shrink-0" />
      <span className="min-w-0 truncate text-[var(--DarkNeutral800)]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <RiArrowUpSLine aria-hidden size={28} className="shrink-0" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-12 flex flex-col gap-6">
      <label className="flex flex-col gap-3">
        <span className="flex items-center gap-2 font-primary-bold text-base">
          Personal Access Token
          <RiInformationLine aria-hidden size={20} className="shrink-0" />
        </span>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className="flex items-center gap-2 font-primary-bold text-base">
          Design URL
          <RiInformationLine aria-hidden size={20} className="shrink-0" />
        </span>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={fieldClass}
        />
      </label>
    </div>

    <div className="mx-auto mt-8 grid w-full max-w-[340px] grid-cols-2 gap-10">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
