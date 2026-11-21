import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldLabelClassName = "font-primary-bold text-[19px]";
const infoIconClassName = "shrink-0 text-[#c9c9c9]";
const inputClassName =
  "mt-[26px] h-[72px] w-full border border-[#7a7a7a] bg-[#1e1e1e] px-[36px] text-[19px] text-[#8a8a8a] outline-none placeholder:text-[#8a8a8a]";
const buttonClassName =
  "h-[72px] w-[170px] rounded-[8px] bg-[#b3491c] text-[20px] text-[#e59a6c]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#151515] px-[40px] pb-[40px] pt-[36px] font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[22px] leading-none">
        UI magician Agent
      </h1>
      <FiSettings size={26} aria-hidden="true" />
    </div>

    <div className="mt-9 flex items-center gap-3 text-[19px] text-[#8a8a8a]">
      <FiChevronUp size={24} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <h2 className="mt-[165px] flex items-center gap-3 font-primary-black text-[24px] leading-none">
      <FiChevronUp size={26} aria-hidden="true" />
      Add New Design
    </h2>

    <FieldLabel htmlFor="test-card-personal-access-token" className="mt-[52px]">
      Personal Access Token
    </FieldLabel>
    <input
      id="test-card-personal-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      className={inputClassName}
    />

    <FieldLabel htmlFor="test-card-design-url" className="mt-[30px]">
      Design URL
    </FieldLabel>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={inputClassName}
    />

    <div className="mt-[42px] flex justify-center gap-9">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[90px] font-primary-black text-[22px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

const FieldLabel = ({
  htmlFor,
  children,
  className = "",
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-4", className)}>
    <label htmlFor={htmlFor} className={fieldLabelClassName}>
      {children}
    </label>
    <FiInfo size={22} aria-hidden="true" className={infoIconClassName} />
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  children: string;
  className?: string;
}
