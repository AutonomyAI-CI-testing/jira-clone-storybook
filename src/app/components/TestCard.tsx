import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A self-contained reproduction of the supplied Figma frame.
 *
 * This is a pipeline smoke test: it takes no props, reads no data and is not
 * mounted by any route. It deliberately carries the frame's own colour and type
 * values instead of the project's design tokens, because the project's token set
 * is light-surface and cobalt while the frame is near-black with brown buttons.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-5 pt-5 pb-16 font-[Inter,ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" aria-hidden />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[83px] flex items-center gap-[10px]">
        <FiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" aria-hidden />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <Field
        className="mt-[28px]"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-[11px]"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        emphasized
      />

      <div className="mt-[23px] flex gap-[17px] pl-[24px]">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <div className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}

interface ActionButtonProps {
  label: string;
}

function ActionButton({ label }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
    >
      {label}
    </button>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
  /** The frame draws the second field with a heavier edge and smaller copy. */
  emphasized?: boolean;
}

function Field({
  label,
  placeholder,
  className = "",
  emphasized = false,
}: FieldProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-[7px]">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          {label}
        </span>
        <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden />
      </div>
      <input
        readOnly
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className={cx(
          "mt-[12px] w-[211px] bg-[#272822] font-semibold text-[#737470]",
          "placeholder:text-[#737470]",
          emphasized
            ? "h-[37px] border-2 border-[#929291] px-5 text-[10.5px]"
            : "h-[36px] border border-[#a5adad] px-[19px] text-[11.5px]"
        )}
      />
    </div>
  );
}
