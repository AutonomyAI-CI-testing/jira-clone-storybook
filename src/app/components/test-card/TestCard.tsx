/**
 * TestCard — a static recreation of the "UI magician Agent" panel from the
 * attached Figma frame. Smoke-test scaffolding: no props, no state, no data.
 *
 * Colours are arbitrary values approximating the frame. This repo's Tailwind
 * config replaces `theme.colors` wholesale, so stock palette classes such as
 * `bg-gray-800` compile to nothing; only `white`, `black` and `transparent`
 * resolve as literals.
 */

const PANEL = "w-[508px] bg-[#1c1c1c] px-10 py-8 font-primary-light text-[#d9d9d9]";
const HEADING = "font-primary-black text-[#e6e6e6]";
const FIELD =
  "mt-3 h-[70px] w-full rounded-none border border-[#8a8a8a] bg-[#2a2a2a] px-5 text-[20px] text-[#d9d9d9] placeholder:text-[#8a8a8a]";
const BUTTON =
  "flex-1 rounded-lg bg-[#8f3d0f] py-6 font-primary-bold text-[20px] text-[#b8b8b8]";

const IconGear = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconChevronUp = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const IconInfo = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v5.5" />
    <path d="M12 7.6h.01" strokeWidth="2.4" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-5">
      <span className="text-[20px]">{label}</span>
      <IconInfo />
    </div>
    <input readOnly placeholder={placeholder} className={FIELD} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL}>
    <div className="flex items-center justify-between">
      <span className={`${HEADING} text-[22px]`}>UI magician Agent</span>
      <IconGear />
    </div>

    <div className="mt-4 flex items-center gap-3 text-[18px] text-[#9a9a9a]">
      <IconChevronUp />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <span className="text-[#e6e6e6]">
        <IconChevronUp />
      </span>
      <span className={`${HEADING} text-[24px]`}>Add New Design</span>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-9">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <div className={`mt-12 ${HEADING} text-[22px]`}>Recent Breakdowns</div>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
