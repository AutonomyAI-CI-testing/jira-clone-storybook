import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// Values below are read off the referenced Figma frame and are approximate.
// The frame's near-black panel and rust buttons have no equivalent in the
// semantic token layer, so this one self-contained component uses literal
// values rather than tokens.
const PANEL = "w-[508px] bg-[#1a1a1a] px-[42px] py-[40px] font-primary";

const HEADING = "font-primary-bold text-[20px] text-[#e6e6e6]";

const INPUT =
  "mt-4 h-[56px] w-full rounded-[2px] border-2 border-[#8c8c8c] bg-[#2b2b2b] px-4 font-primary text-[15px] text-[#d8d8d8] outline-none placeholder:text-[#8a8a8a]";

const ACTION =
  "h-[66px] w-[168px] rounded bg-[#a04a1e] font-primary text-[17px] text-[#d1b3a5]";

const ACTIONS = ["Awesome", "Prepare"];

const Chevron = (): JSX.Element => (
  <IoChevronUp aria-hidden="true" size={20} className="shrink-0 text-[#c8c8c8]" />
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-7">
      <label htmlFor={id} className="font-primary text-[15px] text-[#b0b0b0]">
        {label}
      </label>
      <IoInformationCircleOutline
        aria-hidden="true"
        size={22}
        className="text-[#b0b0b0]"
      />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={INPUT} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL}>
    <div className="flex items-center justify-between">
      <h1 className={HEADING}>UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#d0d0d0]">
        <IoSettingsOutline size={24} />
      </button>
    </div>

    <div className="mt-[46px] flex items-center gap-4">
      <Chevron />
      <span className="min-w-0 truncate font-primary text-[15px] text-[#a8a8a8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[140px] flex items-center gap-4">
      <Chevron />
      <h2 className={HEADING}>Add New Design</h2>
    </div>

    <div className="mt-[54px]">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-[34px]">
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-[62px] flex justify-center gap-[38px]">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-[114px] font-primary-bold text-[20px] text-[#e6e6e6]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
