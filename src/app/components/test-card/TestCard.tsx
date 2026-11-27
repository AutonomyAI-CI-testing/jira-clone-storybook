import { Button } from "@app/components/button";

/**
 * TestCard reproduces the "UI magician Agent" frame from the Figma smoke test.
 * It is intentionally static and self-contained: no props, no state, no data.
 * Colours come from the repo's semantic role tokens so the card follows the
 * active theme.
 */

interface IconProps {
  className?: string;
}

const CogIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
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

const InfoIcon = ({
  className,
  title,
}: IconProps & { title: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
  >
    <title>{title}</title>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const inputClassName =
  "mt-3 w-full rounded-md border-none bg-background-input p-5 text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken px-11 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-icon hover:bg-background-neutral hover:text-icon-brand"
      >
        <CogIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-3 flex min-w-0 items-center gap-2">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-icon" />
      <p className="truncate text-sm font-primary-light text-font-subtle">
        From entire frame to a single frame
      </p>
    </div>

    <h2 className="mt-24 flex items-center gap-2 font-primary-bold text-xl">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      Add New Design
    </h2>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="personal-access-token" className="text-base">
          Personal Access Token
        </label>
        <InfoIcon
          className="h-5 w-5 shrink-0 text-icon"
          title="Where to find your Figma personal access token"
        />
      </div>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="design-url" className="text-base">
          Design URL
        </label>
        <InfoIcon
          className="h-5 w-5 shrink-0 text-icon"
          title="The Figma file URL to break down"
        />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={inputClassName}
      />
    </div>

    <div className="mt-8 flex gap-8 px-10">
      <Button
        variant="contained"
        color="primary"
        size="lg"
        className="flex-1 py-4"
      >
        Awesome
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="lg"
        className="flex-1 py-4"
      >
        Prepare
      </Button>
    </div>

    <h2 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
