/**
 * Smoke-test card built from the "UI magician Agent" Figma frame.
 *
 * Self-contained: no props, no state, no data fetching. The colours are the
 * design's literal values rather than the app's semantic tokens, because the
 * frame is a dark panel and the tokens resolve to the light theme by default.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-xs flex-col bg-black p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <div className="mt-8 flex items-center gap-2">
        <ChevronUpIcon className="h-3 w-3 shrink-0 text-[#8b9291]" />
        <span className="truncate text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        <Field
          id="personalAccessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          inputClassName="border border-[#a5adad] placeholder:text-[#737470]"
        />
        <Field
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          inputClassName="border-2 border-[#929291] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-2xs text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon className="h-3.5 w-3.5 text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={`mt-3 w-full bg-[#272822] px-3 py-2.5 text-2xs text-[#737470] outline-none ${inputClassName}`}
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="rounded bg-[#843a17] px-5 py-2 text-2xs text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 0 1 8.4 12 3.6 3.6 0 0 1 12 8.4a3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-3.6 3.6z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}

interface IconProps {
  className?: string;
}

export default TestCard;
