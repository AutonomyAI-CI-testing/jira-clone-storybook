// This repo's tailwind.config.js replaces the default colour palette entirely
// (only semantic tokens, white/black/transparent), so stock palette classes like
// `bg-neutral-900` generate nothing. This is a self-contained smoke-test panel with
// a fixed dark look that must not follow the app theme, so colours are literal
// arbitrary values rather than theme tokens.
const PANEL_BG = "bg-[#1e1e1e]";
const PANEL_TEXT = "text-[#f2f2f2]";
const MUTED_TEXT = "text-[#9b9b9b]";
const LABEL_TEXT = "text-[#d8d8d8]";

const INPUT_CLASS =
  "mt-2 h-[52px] w-full rounded-[2px] border border-[#6e6e6e] bg-[#2b2b2b] px-4 text-[15px] text-[#e8e8e8] outline-none placeholder:text-[#9b9b9b]";

const BUTTON_CLASS =
  "h-[58px] flex-1 rounded-[4px] bg-[#b04a20] text-[15px] text-[#d8d8d8]";

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <>
    <div
      className={`mt-8 flex items-center justify-between text-[15px] ${LABEL_TEXT}`}
    >
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </>
);

export const TestCard = () => (
  <div
    id="testElem"
    className={`flex min-h-screen w-full max-w-[508px] flex-col ${PANEL_BG} px-8 py-8 ${PANEL_TEXT}`}
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[23px] font-bold">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className={`mt-6 flex items-center gap-2 ${MUTED_TEXT}`}>
      <ChevronUpIcon />
      <span className="truncate text-[16px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2 text-[20px] font-bold">
      <ChevronUpIcon />
      <span>Add New Design</span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-10 flex gap-9">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-14 text-[20px] font-bold">Recent Breakdowns</h2>
  </div>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75v.5" />
  </svg>
);
