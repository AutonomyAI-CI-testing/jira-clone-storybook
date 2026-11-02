/**
 * TestCard — a self-contained reproduction of the Figma "UI magician Agent" panel.
 *
 * Smoke test only: no props, no state and no behaviour. Spacing, colours and
 * typography are approximate by design. The `dark` theme class is pinned on the
 * root because the reference design is a dark surface and the app's default
 * theme is light.
 */

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-9 py-8 text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-black text-2xl">UI magician Agent</h2>

        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 text-font hover:bg-background-neutral-hovered"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <span className="min-w-0 truncate font-primary text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <ChevronUpIcon />
        <h3 className="font-primary-black text-xl">Add New Design</h3>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-primary-bold text-base">
            Personal Access Token
            <InfoIcon />
          </span>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className="h-[60px] w-full rounded border-2 border-border-bold bg-background-input px-5 font-primary text-base text-font placeholder:text-font-subtlest"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-primary-bold text-base">
            Design URL
            <InfoIcon />
          </span>
          <input
            type="text"
            placeholder="https://www.figma.com/file:"
            className="h-[60px] w-full rounded border-2 border-border-bold bg-background-input px-5 font-primary text-base text-font placeholder:text-font-subtlest"
          />
        </label>
      </div>

      <div className="mt-8 flex items-center gap-8">
        <button
          type="button"
          className="rounded-md bg-[#9c4526] px-8 py-3.5 font-primary-bold text-base text-font hover:bg-[#8a3d21]"
        >
          Awesome
        </button>

        <button
          type="button"
          className="rounded-md bg-[#9c4526] px-8 py-3.5 font-primary-bold text-base text-font hover:bg-[#8a3d21]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
