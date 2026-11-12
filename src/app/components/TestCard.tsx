import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

// The panel reproduces a Figma frame, so its palette is written as literal values:
// this project's Tailwind theme replaces the colour scale wholesale, so a stock
// palette class would compile to nothing, and the frame's near-black ground and
// rust buttons have no semantic token to resolve to. Type, radii and spacing use
// the repo's own scale.
const PANEL_CLASS = "w-[508px] bg-[#191919] px-6 pb-8 pt-7 font-primary text-[15px] text-[#e3e3e3]";
const HEADING_CLASS = "font-primary-bold text-xl text-[#e0e0e0]";
const FIELD_LABEL_CLASS = "text-[15px] text-[#cfcfcf]";
const FIELD_INPUT_CLASS =
  "h-[46px] w-full rounded-sm border border-[#6e6e6e] bg-[#212121] px-4 text-[15px] text-[#e3e3e3] placeholder:text-[#8a8a8a]";
const ACTION_BUTTON_CLASS =
  "h-12 w-[170px] rounded-lg bg-[#9e4018] text-[17px] text-[#bfb0a5]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2.5">
    <div className="flex items-center gap-3">
      <span className={FIELD_LABEL_CLASS}>{label}</span>
      <HiInformationCircle aria-hidden="true" className="h-5 w-5 text-[#d0d0d0]" />
    </div>
    <input className={FIELD_INPUT_CLASS} placeholder={placeholder} readOnly />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL_CLASS}>
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[#e3e3e3]">UI magician Agent</h2>
      <HiCog aria-hidden="true" className="h-[22px] w-[22px] text-[#d8d8d8]" />
    </div>

    <div className="mt-3.5 flex items-center gap-2 text-[#a8a8a8]">
      <HiChevronUp aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-[70px] flex items-center gap-2">
      <HiChevronUp aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[#e0e0e0]" />
      <h3 className={HEADING_CLASS}>Add New Design</h3>
    </div>

    <div className="mt-6 flex flex-col gap-5">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-7 flex gap-7">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className={`${HEADING_CLASS} mt-[60px]`}>Recent Breakdowns</h3>
  </div>
);

export default TestCard;

interface FieldProps {
  label: string;
  placeholder: string;
}
