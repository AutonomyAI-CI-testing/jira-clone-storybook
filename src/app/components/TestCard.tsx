import { Button } from "@app/components/button";

type IconProps = {
  size?: number;
};

const GearIcon = ({ size = 20 }: IconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.4 5.4l1.8 1.8M16.8 16.8l1.8 1.8M18.6 5.4l-1.8 1.8M7.2 16.8l-1.8 1.8" />
  </svg>
);

const ChevronUpIcon = ({ size = 16 }: IconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = ({ size = 16 }: IconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.2v5.2" />
    <path d="M12 7.8h.01" />
  </svg>
);

const FieldLabel = ({ label }: { label: string }): JSX.Element => (
  <div className="flex items-center gap-2">
    <span className="font-primary-light text-sm text-font-subtle">{label}</span>
    <span className="text-font-subtlest">
      <InfoIcon />
    </span>
  </div>
);

const TextField = ({ placeholder }: { placeholder: string }): JSX.Element => (
  <input
    type="text"
    placeholder={placeholder}
    className="mt-2 w-full rounded-md bg-background-input px-3 py-3 text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand"
  />
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded-md bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-lg">UI magician Agent</span>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </div>

      <div className="mt-10 flex items-center gap-2">
        <ChevronUpIcon size={20} />
        <span className="font-primary-bold text-lg">Add New Design</span>
      </div>

      <div className="mt-4">
        <FieldLabel label="Personal Access Token" />
        <TextField placeholder="figd_xxxxxxxxxxxxxxxxxxx" />
      </div>

      <div className="mt-4">
        <FieldLabel label="Design URL" />
        <TextField placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-6 flex gap-4">
        <Button className="grow py-3">Awesome</Button>
        <Button className="grow py-3">Prepare</Button>
      </div>

      <h2 className="mt-10 font-primary-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};
