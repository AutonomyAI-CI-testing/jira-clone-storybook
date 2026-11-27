import cx from "classix";
import type { ReactNode } from "react";
import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * Self-contained by request: no props, no state, and nothing in the app imports it. The frame is a
 * different product's dark panel, so its colours are written as literal values rather than as the
 * app's semantic tokens — none of those tokens is a match. Sizes follow the frame's 1x space
 * (254 x 508); spacing is approximate.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-6 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <HiOutlineCog6Tooth
        aria-hidden="true"
        size={16}
        className="shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#8b9291]"
      />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 pl-[6px]">
      <HiChevronUp
        aria-hidden="true"
        size={14}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[26px] flex items-center justify-between">
      <label
        htmlFor="test-card-token"
        className="text-[11.5px] font-semibold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoGlyph />
    </div>
    <PanelField
      id="test-card-token"
      value="figd_xxxxxxxxxxxxxxxxxx"
      className="h-9 border-2 border-[#929291] pl-[18px] text-[11.5px] text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="test-card-url"
        className="text-[11.5px] font-semibold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoGlyph />
    </div>
    <PanelField
      id="test-card-url"
      value="https://www.figma.com/file/:"
      className="h-[37px] border border-[#a5adad] pl-[19px] text-[10.5px] text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <span className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const PanelField = ({
  id,
  value,
  className,
}: {
  id: string;
  value: string;
  className: string;
}) => (
  <input
    id={id}
    readOnly
    value={value}
    className={cx(
      "mt-3 w-full bg-[#272822] font-semibold outline-none",
      className
    )}
  />
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078] transition-opacity hover:opacity-90"
  >
    {children}
  </button>
);

const InfoGlyph = () => (
  <HiOutlineInformationCircle
    aria-hidden="true"
    size={15}
    className="shrink-0 text-[#a4a4a3]"
  />
);
