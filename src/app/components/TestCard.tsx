import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const INPUT_CLASSES =
  "mt-[16px] h-[70px] w-full rounded-[2px] border border-[#6e6e6e] bg-[#2b2b2b] px-[35px] text-[17px] text-[#e0e0e0] placeholder:text-[#8c8c8c]";

const BUTTON_CLASSES =
  "h-[74px] w-[169px] rounded-md bg-[#9c3f18] text-[17px] text-[#c9c9c9]";

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}): JSX.Element => (
  <div className="flex items-center gap-[35px]">
    <label htmlFor={htmlFor} className="text-[17px]">
      {children}
    </label>
    <RiInformationLine size={22} className="shrink-0" aria-hidden="true" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] p-[30px] font-primary text-[#e0e0e0]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[21px] leading-tight text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <RiSettings3Line
        size={26}
        className="shrink-0 text-[#d5d5d5]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-[26px] flex items-center gap-[14px]">
      <RiArrowUpSLine size={20} className="shrink-0" aria-hidden="true" />
      <span className="truncate text-[16px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[110px] flex items-center gap-[14px]">
      <RiArrowUpSLine size={20} className="shrink-0" aria-hidden="true" />
      <h2 className="font-primary-bold text-[21px] leading-tight">
        Add New Design
      </h2>
    </div>

    <div className="mt-[25px]">
      <FieldLabel htmlFor="accessToken">Personal Access Token</FieldLabel>
      <input
        id="accessToken"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className={INPUT_CLASSES}
      />
    </div>

    <div className="mt-[22px]">
      <FieldLabel htmlFor="designUrl">Design URL</FieldLabel>
      <input
        id="designUrl"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={INPUT_CLASSES}
      />
    </div>

    <div className="mt-[95px] flex items-center gap-[35px]">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[105px] font-primary-bold text-[21px] leading-tight">
      Recent Breakdowns
    </h2>
  </div>
);
