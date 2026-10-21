import { TbChevronUp, TbInfoCircle, TbSettings } from "react-icons/tb";

const FIELD_CLASSES =
  "mt-4 w-full rounded border-2 border-border-bold bg-elevation-surface-raised px-5 py-4 font-primary-light text-base text-font placeholder:text-font-subtlest focus:outline-none";

const BUTTON_CLASSES =
  "flex-1 rounded-lg bg-background-danger-bold px-4 py-5 font-primary text-lg text-font-inverse";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <TbSettings aria-hidden className="h-6 w-6 text-font-subtle" />
    </div>

    <div className="mt-6 flex items-center gap-4">
      <TbChevronUp aria-hidden className="h-5 w-5 shrink-0 text-font-subtle" />
      <span className="truncate text-base text-font-subtle">
        From entire frame to a singl…
      </span>
    </div>

    {/* Collapsed content band — empty in the design */}
    <div aria-hidden className="h-36" />

    <h2 className="flex items-center gap-4 font-primary-bold text-2xl">
      <TbChevronUp aria-hidden className="h-6 w-6 shrink-0" />
      Add New Design
    </h2>

    <label
      htmlFor="testcard-access-token"
      className="mt-10 flex items-center gap-4 text-base text-font-subtle"
    >
      Personal Access Token
      <TbInfoCircle aria-hidden className="h-5 w-5 shrink-0" />
    </label>
    <input
      id="testcard-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASSES}
    />

    <label
      htmlFor="testcard-design-url"
      className="mt-7 flex items-center gap-4 text-base text-font-subtle"
    >
      Design URL
      <TbInfoCircle aria-hidden className="h-5 w-5 shrink-0" />
    </label>
    <input
      id="testcard-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={FIELD_CLASSES}
    />

    <div className="mt-10 flex gap-8">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
