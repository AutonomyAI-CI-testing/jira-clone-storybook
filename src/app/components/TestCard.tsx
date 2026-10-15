import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const ACTION_LABELS = ["Awesome", "Prepare"];

/**
 * Standalone reproduction of the "UI magician Agent" panel from the attached
 * Figma frame. Self-contained by design: no props, no state, no data, no
 * behaviour. Built for a design-to-component smoke test, not used by the app.
 *
 * The `dark` class on the root makes the semantic colour tokens resolve to the
 * dark palette the frame shows, so every surface below stays token-driven.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 pb-16 pt-12 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-font">UI magician Agent</h2>
      <button type="button" aria-label="Settings" className="flex items-center">
        <HiOutlineCog className="text-2xl text-font" aria-hidden />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <HiOutlineChevronUp className="shrink-0 text-xl text-font" aria-hidden />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-40 flex items-center gap-3 font-primary-bold text-xl text-font">
      <HiOutlineChevronUp className="shrink-0 text-xl" aria-hidden />
      Add New Design
    </h2>

    <label
      htmlFor="testElem-token"
      className="mt-14 flex items-center gap-3 font-primary-light text-base text-font-subtle"
    >
      Personal Access Token
      <HiOutlineInformationCircle className="text-xl" aria-hidden />
    </label>
    <input
      id="testElem-token"
      name="token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-6 h-[62px] w-full rounded-md bg-background-input px-5 font-primary-light text-base text-font-subtle outline outline-2 outline-border-bold placeholder:text-font-subtlest"
    />

    <label
      htmlFor="testElem-url"
      className="mt-8 flex items-center gap-3 font-primary-light text-base text-font-subtle"
    >
      Design URL
      <HiOutlineInformationCircle className="text-xl" aria-hidden />
    </label>
    <input
      id="testElem-url"
      name="url"
      placeholder="https://www.figma.com/file/"
      className="mt-6 h-[62px] w-full rounded-md bg-background-input px-5 font-primary-light text-base text-font-subtle outline outline-2 outline-border-bold placeholder:text-font-subtlest"
    />

    <div className="mt-14 flex justify-end gap-9">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-font-subtle transition-colors hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-14 font-primary-bold text-xl text-font">
      Recent Breakdowns
    </h2>
  </div>
);
