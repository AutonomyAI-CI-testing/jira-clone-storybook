import { MdSettings, MdKeyboardArrowUp, MdInfoOutline } from "react-icons/md";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-6 py-6 font-primary text-font"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-2xl">UI magician Agent</span>
      <MdSettings size={22} className="text-icon-subtle" aria-hidden="true" />
    </div>

    {/* Collapsible header */}
    <div className="mt-5 flex items-center gap-2">
      <MdKeyboardArrowUp
        size={20}
        className="shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
      <span className="truncate text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    {/* Large vertical gap from the design */}
    <div className="h-32" />

    {/* Section header */}
    <div className="flex items-center gap-2">
      <MdKeyboardArrowUp
        size={20}
        className="shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
      <span className="font-primary-black text-xl">Add New Design</span>
    </div>

    {/* Field: Personal Access Token */}
    <label className="mt-6 flex items-center gap-2">
      <span className="text-base">Personal Access Token</span>
      <MdInfoOutline
        size={16}
        className="shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
    </label>
    <input
      className="mt-3 w-full rounded border border-border-input bg-background-input px-3 py-3 text-base placeholder:text-font-subtlest"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    {/* Field: Design URL */}
    <label className="mt-5 flex items-center gap-2">
      <span className="text-base">Design URL</span>
      <MdInfoOutline
        size={16}
        className="shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
    </label>
    <input
      className="mt-3 w-full rounded border border-border-input bg-background-input px-3 py-3 text-base placeholder:text-font-subtlest"
      placeholder="https://www.figma.com/file/"
    />

    {/* Action row */}
    <div className="mt-7 flex gap-8">
      <button
        type="button"
        className="rounded bg-background-brand-bold px-8 py-3 text-base text-font-inverse hover:bg-background-brand-bold-hovered"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-background-brand-bold px-8 py-3 text-base text-font-inverse hover:bg-background-brand-bold-hovered"
      >
        Prepare
      </button>
    </div>

    {/* Section heading */}
    <span className="mt-10 font-primary-black text-xl">Recent Breakdowns</span>
  </div>
);

export default TestCard;
