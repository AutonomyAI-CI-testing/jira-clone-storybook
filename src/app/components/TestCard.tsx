import cx from "classix";
import { BsChevronUp } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" frame from Figma.
 *
 * A smoke test: it takes no props, holds no state and reads nothing, so it
 * renders the same panel wherever it is mounted. Colours and sizes are the
 * frame's own values, with its type sizes (13.5 / 11.5 / 10.5px) rounded onto
 * the repo's scale and its Inter face replaced by the repo's own bold family.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[254px] bg-[#1C1D17] pb-[62px] font-primary-bold text-[#b5b5b5]">
        <div className="h-[9px] bg-[#161613]" />

        <div className="mt-[11px] flex items-center justify-between px-5">
          <span className="text-xs">UI magician Agent</span>
          <MdSettings size={16} aria-hidden="true" />
        </div>

        <div className="mt-[18px] flex items-center gap-2 px-5">
          <BsChevronUp size={12} aria-hidden="true" />
          <span className="text-2xs text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[75px] flex items-center gap-2 px-5">
          <BsChevronUp size={14} aria-hidden="true" />
          <span className="text-xs text-[#b2b2b1]">Add New Design</span>
        </div>

        <div className="mt-[28px] px-5">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            edge="border border-[#a5adad]"
          />
        </div>

        <div className="mt-[11px] px-5">
          <Field
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            edge="border-2 border-[#929291]"
          />
        </div>

        <div className="mt-[22px] flex justify-end gap-[15px] px-5">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>

        <div className="mt-[47px] px-5">
          <span className="text-xs text-[#b0b0b0]">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
};

/** The frame's two buttons differ only in their label. */
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]";

/** A labelled field: the caption with its info glyph, then the input below. */
const Field = ({ label, placeholder, edge }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-[10px]">
    <div className="flex items-center gap-2">
      <span className="text-2xs text-[#a4a4a3]">{label}</span>
      <HiInformationCircle size={15} aria-hidden="true" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "h-[36px] w-[211px] bg-[#272822] px-[19px] text-2xs text-[#b5b5b5] placeholder:text-[#737470]",
        edge
      )}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  /** The frame gives its two fields different edges — 1px and 2px. */
  edge: string;
}
