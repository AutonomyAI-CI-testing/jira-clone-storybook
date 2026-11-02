const RUST_BUTTON_CLASSES =
  "flex-1 rounded bg-[#8f3f1c] px-8 py-4 font-primary-bold text-sm text-font-inverse hover:bg-[#7a3517] active:bg-[#662c13]";

const FIELD_CLASSES =
  "mt-3 w-full rounded-md border border-border-bold bg-background-input p-4 font-primary text-sm text-font placeholder:text-font-subtlest";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="shrink-0 text-font-subtle">
          <ChevronUpIcon />
        </span>
        <span className="truncate text-base text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h2 className="font-primary-black text-lg">Add New Design</h2>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="test-card-token"
                className="font-primary-bold text-sm"
              >
                Personal Access Token
              </label>
              <span className="text-font-subtle">
                <InfoIcon />
              </span>
            </div>
            <input
              id="test-card-token"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxxx"
              className={FIELD_CLASSES}
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="test-card-url"
                className="font-primary-bold text-sm"
              >
                Design URL
              </label>
              <span className="text-font-subtle">
                <InfoIcon />
              </span>
            </div>
            <input
              id="test-card-url"
              type="text"
              placeholder="https://www.figma.com/file:"
              className={FIELD_CLASSES}
            />
          </div>
        </div>

        <div className="mt-10 flex gap-8">
          <button type="button" className={RUST_BUTTON_CLASSES}>
            Awesome
          </button>
          <button type="button" className={RUST_BUTTON_CLASSES}>
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-24 font-primary-black text-lg">Recent Breakdowns</h2>
    </div>
  );
};
