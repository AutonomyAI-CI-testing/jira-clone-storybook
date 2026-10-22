import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static replica of the "UI magician Agent" panel from the reference Figma
 * frame. Self-contained: no props, no state, and nothing that interacts with
 * the app. Colours and sizes are the frame's own values, used literally
 * because the design sits outside this project's semantic token set.
 */

const ACTION_BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const CollapsibleRow = ({
  label,
  emphasized = false,
}: CollapsibleRowProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <FiChevronUp aria-hidden className="shrink-0 text-[12px] text-[#8b9291]" />
    <span
      className={cx(
        "truncate",
        emphasized
          ? "font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]"
          : "font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]"
      )}
    >
      {label}
    </span>
  </div>
);

const LabeledField = ({
  label,
  placeholder,
  borderClassName,
}: LabeledFieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <FiInfo aria-hidden className="text-[15px] text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "w-full bg-[#272822] px-4 py-2 font-primary text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]",
        borderClassName
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#000000] px-5 py-5">
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden className="text-[16px] text-[#b5b5b5]" />
    </div>

    <div className="mt-4">
      <CollapsibleRow label="From entire frame to a single component" />
    </div>

    <div className="mt-16">
      <CollapsibleRow label="Add New Design" emphasized />
    </div>

    <div className="mt-6 flex flex-col gap-3">
      <LabeledField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderClassName="border border-[#a5adad]"
      />
      <LabeledField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderClassName="border-2 border-[#929291]"
      />
    </div>

    <div className="mt-6 flex gap-4 pl-6">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <p className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

interface CollapsibleRowProps {
  label: string;
  emphasized?: boolean;
}

interface LabeledFieldProps {
  label: string;
  placeholder: string;
  borderClassName: string;
}
