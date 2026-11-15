import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

// Smoke-test card reproducing the "UI magician Agent" panel from Figma.
// Self-contained: no props, no state, values are read off the frame image.
const fieldInputClass =
  "h-[62px] w-full rounded-[4px] border border-[#5a5a5a] " +
  "bg-[#262626] px-5 text-[16px] text-[#f0f0f0] " +
  "placeholder:text-[#7a7a7a]";

const buttonClass =
  "h-[64px] w-[168px] rounded-[6px] bg-[#9e4a20] " +
  "text-[16px] font-primary-bold text-[#e0e0e0]";

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <>
    <div className="flex items-center gap-2">
      <span className="text-[16px] text-[#cfcfcf]">{label}</span>
      <RiInformationLine size={20} className="text-[#cfcfcf]" aria-hidden />
    </div>
    <input className={`mt-[16px] ${fieldInputClass}`} placeholder={placeholder} />
  </>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-[40px] py-[48px] font-primary text-[#f0f0f0]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[20px] font-primary-bold">UI magician Agent</span>
      <RiSettings3Line size={24} className="text-[#e0e0e0]" aria-hidden />
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[16px] text-[#8f8f8f]">
      <RiArrowUpSLine size={22} className="shrink-0" aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[130px] flex items-center gap-2">
      <RiArrowUpSLine size={26} className="shrink-0" aria-hidden />
      <span className="text-[20px] font-primary-bold">Add New Design</span>
    </div>

    <div className="mt-[40px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-[24px]">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-[40px] flex gap-[36px] pl-[48px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-[90px] text-[20px] font-primary-bold">
      Recent Breakdowns
    </div>
  </div>
);
