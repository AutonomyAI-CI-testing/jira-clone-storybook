import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 hover:bg-background-neutral-hovered"
      >
        <RiSettings3Line size={28} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <RiArrowUpSLine size={28} />
      <span className="truncate text-xl">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <RiArrowUpSLine size={32} />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <label className="mt-8 block">
      <span className="flex items-center gap-3 font-primary-bold text-base">
        Personal Access Token
        <RiInformationLine size={22} className="text-font-subtle" />
      </span>
      <input
        className="mt-3 w-full rounded-md border border-border bg-background-input p-4 text-font outline-none placeholder:text-font-subtlest"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </label>

    <label className="mt-8 block">
      <span className="flex items-center gap-3 font-primary-bold text-base">
        Design URL
        <RiInformationLine size={22} className="text-font-subtle" />
      </span>
      <input
        className="mt-3 w-full rounded-md border border-border bg-background-input p-4 text-font outline-none placeholder:text-font-subtlest"
        placeholder="https://www.figma.com/file/"
      />
    </label>

    <div className="mt-10 flex gap-6">
      <button
        type="button"
        className="flex-1 rounded-md bg-[var(--Orange800)] px-8 py-4 hover:bg-[var(--Orange900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-md bg-[var(--Orange800)] px-8 py-4 hover:bg-[var(--Orange900)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
