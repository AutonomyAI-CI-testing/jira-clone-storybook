import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A fixed, self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * The frame is 254x508 px and carries its own dark palette instead of the app's
 * theme tokens, because it copies an external design rather than adding a
 * surface to the Jira product. Every value below is taken from the frame's
 * style guide; nothing here re-skins with the active theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 font-[Inter,sans-serif] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden="true" className="h-4 w-4 shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="h-2 w-2 shrink-0" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-3 w-3 shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldLabel label="Personal Access Token" className="mt-[28px] text-[#a4a4a3]" />
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
    />

    <FieldLabel label="Design URL" className="mt-3 text-[#a3a3a2]" />
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
    />

    <div className="mt-[22px] flex justify-end gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const FieldLabel = ({
  label,
  className,
}: {
  label: string;
  className: string;
}): JSX.Element => (
  <div className={cx("flex items-center gap-3", className)}>
    <span className="text-[11.5px] font-semibold leading-[13.92px]">
      {label}
    </span>
    <FiInfo aria-hidden="true" className="h-[15px] w-[15px] shrink-0" />
  </div>
);
