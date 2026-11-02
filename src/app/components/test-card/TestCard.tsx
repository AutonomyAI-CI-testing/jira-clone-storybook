const ICON_CLASS = "size-5 shrink-0";

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="size-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6Z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className={ICON_CLASS}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className={ICON_CLASS}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" fill="currentColor" r="1" stroke="none" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="flex flex-col gap-3">
    <span className="flex items-center gap-2 font-primary text-base text-font-subtle">
      {label}
      <InfoIcon />
    </span>
    <input
      className="w-full rounded border border-border-bold bg-background-input px-3 py-3 font-primary text-base text-font placeholder:text-font-subtlest"
      placeholder={placeholder}
      readOnly
      type="text"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="w-[170px] rounded bg-[#a44a28] px-6 py-4 font-primary-bold text-sm text-font hover:bg-[#8f3f22] active:bg-[#7a351d]"
    type="button"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    className="dark w-[508px] bg-elevation-surface p-5 font-primary text-font"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        aria-label="Open settings"
        className="rounded-full p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
        type="button"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-16 flex items-center gap-2 font-primary-bold text-lg">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <div className="mt-6 flex flex-col gap-5">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />
    </div>

    <div className="mt-8 flex gap-8">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
