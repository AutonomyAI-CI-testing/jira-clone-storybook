import cx from "classix";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Self-contained reproduction of the "UI magician Agent" Figma frame.
 * Smoke test: no props, no state, no behaviour.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-16 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-[#b5b5b5]"
      >
        <HiOutlineCog size={14} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-1 text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <HiOutlineChevronUp size={12} className="shrink-0" />
      <span className="min-w-0 truncate">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-20 flex items-center gap-1">
      <HiOutlineChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7">
      <TestCardField
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderClassName="border border-[#a5adad]"
      />
    </div>

    <div className="mt-3">
      <TestCardField
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderClassName="border-2 border-[#929291]"
      />
    </div>

    <div className="mt-6 flex gap-4 pl-6">
      <TestCardButton>Awesome</TestCardButton>
      <TestCardButton>Prepare</TestCardButton>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const TestCardField = ({
  id,
  label,
  placeholder,
  borderClassName,
}: TestCardFieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        {label}
      </label>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full bg-[#272822] px-5 text-[11.5px] leading-[13.92px] text-[#a4a4a3] placeholder:text-[#737470]",
        borderClassName
      )}
    />
  </div>
);

const TestCardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface TestCardFieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClassName: string;
}
