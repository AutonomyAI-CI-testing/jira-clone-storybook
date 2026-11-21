import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

/**
 * Smoke-test card reproducing the "UI magician Agent" panel from a Figma frame.
 *
 * Self-contained: no props, no state, nothing wired into the app. The colours
 * are the frame's own near-black palette, which has no counterpart in this
 * repo's Atlas token map, so they are written as Tailwind arbitrary values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1a1a1a] px-[44px] pb-[44px] pt-[38px] font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[28px] leading-[1.2] text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <HiOutlineCog6Tooth
        aria-hidden="true"
        size={30}
        className="shrink-0 text-[#e8e8e8]"
      />
    </div>

    <div className="mt-[34px] flex items-center gap-[14px]">
      <HiChevronUp
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[#c9c9c9]"
      />
      <span className="min-w-0 truncate text-[22px] text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[130px]" aria-hidden="true" />

    <div className="flex items-center gap-[14px]">
      <HiChevronUp
        aria-hidden="true"
        size={24}
        className="shrink-0 text-[#e8e8e8]"
      />
      <h2 className="font-primary-bold text-[25px] leading-[1.2] text-[#e8e8e8]">
        Add New Design
      </h2>
    </div>

    <TestField
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      className="mt-[52px]"
    />
    <TestField
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[36px]"
    />

    <div className="mt-[54px] flex gap-[38px] pl-[46px]">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[168px] rounded-lg bg-[#9e3d12] font-primary text-[22px] text-[#dfa17c]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[96px] font-primary-bold text-[25px] leading-[1.2] text-[#d0d0d0]">
      Recent Breakdowns
    </h3>
  </div>
);

const TestField = ({
  id,
  label,
  placeholder,
  className,
}: TestFieldProps): JSX.Element => (
  <div className={className}>
    <label
      htmlFor={id}
      className="flex items-center gap-[10px] text-[19px] text-[#d0d0d0]"
    >
      {label}
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={24}
        className="shrink-0"
      />
    </label>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-[26px] h-[60px] w-full border border-[#8a8a8a] bg-[#1f1f1f] px-[32px] text-[19px] text-[#e8e8e8] placeholder:text-[#8f8f8f] focus:outline-none"
    />
  </div>
);

interface TestFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
