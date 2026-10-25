import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-5 py-4 text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
      >
        <FiSettings size={20} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-sm text-font-subtle">
      <FiChevronUp size={18} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden="true" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-access-token"
            className="font-primary-bold text-lg"
          >
            Personal Access Token
          </label>
          <span
            role="img"
            aria-label="More information about the personal access token"
            className="flex text-font-subtle"
          >
            <FiInfo size={18} aria-hidden="true" />
          </span>
        </div>
        <input
          id="test-card-access-token"
          name="accessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-md border-none bg-background-input p-3 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed"
        />
      </div>

      <div>
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="font-primary-bold text-lg"
          >
            Design URL
          </label>
          <span
            role="img"
            aria-label="More information about the design URL"
            className="flex text-font-subtle"
          >
            <FiInfo size={18} aria-hidden="true" />
          </span>
        </div>
        <input
          id="test-card-design-url"
          name="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-md border-none bg-background-input p-3 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-8 py-2 text-font hover:opacity-80"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-8 py-2 text-font hover:opacity-80"
        >
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);
