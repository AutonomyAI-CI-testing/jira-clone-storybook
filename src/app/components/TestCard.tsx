import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static, self-contained mock of a design-tool panel.
 *
 * Smoke test only: no props, no state, no behaviour. Every colour and size is
 * approximated from the reference frame rather than taken from the token layer,
 * because the frame is a dark surface the semantic tokens do not describe.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#111111] px-[42px] pb-[60px] pt-[42px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[20px] text-[#e8e8e8]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden="true" className="text-[22px] text-[#d4d4d4]" />
    </div>

    <div className="mt-[30px] flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[18px] text-[#d4d4d4]"
      />
      <span className="truncate text-[15px] text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[20px] text-[#e8e8e8]"
      />
      <span className="font-primary-bold text-[20px] text-[#e8e8e8]">
        Add New Design
      </span>
    </div>

    <TestCardField
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <TestCardField
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-[34px] flex gap-4">
      <button
        type="button"
        className="h-[68px] flex-1 rounded-[6px] bg-[#a94a22] font-primary-bold text-[17px] text-[#bfbfbf]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[68px] flex-1 rounded-[6px] bg-[#a94a22] font-primary-bold text-[17px] text-[#bfbfbf]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[56px] font-primary-bold text-[20px] text-[#e8e8e8]">
      Recent Breakdowns
    </div>
  </div>
);

const TestCardField = ({
  label,
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <div className="mt-[36px]">
    <div className="flex items-center gap-3">
      <span className="text-[16px] text-[#d4d4d4]">{label}</span>
      <FiInfo aria-hidden="true" className="text-[18px] text-[#d4d4d4]" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-[68px] w-full rounded-[4px] border border-[#5a5a5a] bg-[#1b1b1b] px-4 text-[16px] text-[#e8e8e8] placeholder:text-[#8c8c8c]"
    />
  </div>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}
