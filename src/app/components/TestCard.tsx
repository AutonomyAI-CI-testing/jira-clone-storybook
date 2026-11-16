/**
 * TestCard — a self-contained smoke-test component.
 *
 * Reproduces the cropped Figma frame (a dark "UI magician Agent" panel) with Tailwind
 * classes. It takes no props, holds no state and is wired into no route: it exists only to
 * prove the design -> component -> preview path end to end, so its spacing, colours and type
 * sizes are close approximations read off the frame rather than exact design tokens.
 */

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
};

function Field({ id, label, placeholder }: FieldProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-base text-[#cfcfcf]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        readOnly
        placeholder={placeholder}
        className="mt-7 h-16 w-full border border-[#4a4a4a] bg-[#2b2b2b] px-4 text-[0.9375rem] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
}

function ChevronUpIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[#cfcfcf]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[#cfcfcf]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function TestCardButton({ children }: { children: string }) {
  return (
    <button
      type="button"
      className="h-16 w-[170px] rounded-md bg-[#a8421c] text-base text-[#c9c9c9]"
    >
      {children}
    </button>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 pt-10 pb-8 font-primary text-[#d6d6d6]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-lg text-[#e6e6e6]">UI magician Agent</span>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <ChevronUpIcon className="h-[18px] w-[18px] text-[#cfcfcf]" />
        <span className="text-[0.9375rem] text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40">
        <div className="flex items-center gap-3">
          <ChevronUpIcon className="h-6 w-6 text-[#d6d6d6]" />
          <span className="font-primary-bold text-[1.375rem] text-[#d6d6d6]">
            Add New Design
          </span>
        </div>

        <div className="mt-16">
          <Field
            id="testElem-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-12">
          <Field
            id="testElem-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-12 flex justify-center gap-8">
          <TestCardButton>Awesome</TestCardButton>
          <TestCardButton>Prepare</TestCardButton>
        </div>
      </div>

      <div className="mt-28">
        <span className="text-xl text-[#8a8a8a]">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
