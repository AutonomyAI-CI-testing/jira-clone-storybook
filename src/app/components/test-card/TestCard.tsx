import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: a static reproduction of the "UI magician Agent" panel from the
 * Figma frame attached to JIR2-1. It takes no props and has no behaviour — the
 * fields are inert and the buttons do nothing. Colours and sizes are the
 * frame's own values, kept here as arbitrary utilities because the frame's dark
 * palette has no equivalent in this app's semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] pb-[62px] pl-5 pr-[23px] pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings
        aria-hidden="true"
        className="shrink-0 text-[#b5b5b5]"
        size={16}
      />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
        size={10}
      />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
        size={12}
      />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad] placeholder:text-[#737470]"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      inputClassName="border-2 border-[#929291] placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  className,
  label,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-6">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a3]">
        {label}
      </span>
      <FiInfo aria-hidden="true" className="shrink-0 text-[#a3a3a3]" size={15} />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-3 block h-9 w-full bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#b5b5b5]",
        inputClassName
      )}
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
  inputClassName?: string;
}

interface ActionButtonProps {
  children: string;
}
