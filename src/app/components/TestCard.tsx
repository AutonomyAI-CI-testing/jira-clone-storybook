import cx from "classix";
import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

interface FieldGroupProps {
  label: string;
  placeholder: string;
  emphasised?: boolean;
}

const FieldGroup = ({
  label,
  placeholder,
  emphasised = false,
}: FieldGroupProps): JSX.Element => (
  <>
    <div className="mt-3 flex items-center gap-3">
      <span className="font-primary-bold text-2xs text-[#a4a4a3]">{label}</span>
      <HiInformationCircle size={15} className="text-[#a4a4a3]" />
    </div>
    <div
      className={cx(
        "mt-3 flex h-9 w-full items-center bg-[#272822] px-[19px]",
        emphasised ? "border-2 border-[#929291]" : "border border-[#a5adad]"
      )}
    >
      <span className="font-primary-bold text-2xs text-[#737470]">
        {placeholder}
      </span>
    </div>
  </>
);

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] px-5 pt-5 text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <HiCog size={16} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiChevronUp size={12} className="text-[#8b9291]" />
      <span className="font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp size={12} className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldGroup
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <FieldGroup
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      emphasised
    />

    <div className="mt-[22px] flex gap-4 pl-6">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <p className="mt-[47px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
