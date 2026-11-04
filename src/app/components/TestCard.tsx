import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-9 py-10 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <HiOutlineCog className="h-7 w-7 shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[color:var(--DarkNeutral700)]">
      <HiOutlineChevronUp className="h-5 w-5 shrink-0" />
      <span className="font-primary-light text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <HiOutlineChevronUp className="h-5 w-5 shrink-0" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <span className="text-lg">Personal Access Token</span>
      <HiOutlineInformationCircle className="h-5 w-5 shrink-0" />
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 w-full rounded border border-[color:var(--DarkNeutral500)] bg-transparent p-4 text-lg placeholder:text-[color:var(--DarkNeutral700)]"
    />

    <div className="mt-6 flex items-center gap-2">
      <span className="text-lg">Design URL</span>
      <HiOutlineInformationCircle className="h-5 w-5 shrink-0" />
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 w-full rounded border border-[color:var(--DarkNeutral500)] bg-transparent p-4 text-lg placeholder:text-[color:var(--DarkNeutral700)]"
    />

    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-10 py-5 text-lg"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-10 py-5 text-lg"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
