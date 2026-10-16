/**
 * Smoke-test component: a static reproduction of the attached Figma frame
 * (a dark "UI magician Agent" settings panel).
 *
 * Self-contained on purpose — no props, no state, no imports from the app.
 * Colours are literal values read from the reference image rather than
 * semantic tokens, because the app's tokens are theme-bound and this panel
 * is meant to look the same regardless of the active theme.
 */

const INPUT_CLASS =
  "h-[68px] w-full rounded border border-[#767676] bg-[#242424] px-4 font-primary text-base text-[#e8e8e8] placeholder:text-[#8a8a8a]";

const BUTTON_CLASS =
  "rounded-lg bg-[#a63e17] px-8 py-4 font-primary text-base text-[#d8d0cc]";

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-3 text-[#b0b0b0]">
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] p-10 font-primary text-[#e8e8e8]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-10 flex items-center gap-4 text-[#b0b0b0]">
      <ChevronUpIcon />
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="font-primary-bold text-xl">Add New Design</span>
    </div>

    <div className="mt-14 space-y-6">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-12 flex justify-end gap-8">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-24 text-xl text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);
