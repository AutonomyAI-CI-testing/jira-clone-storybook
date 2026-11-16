import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import type { ReactNode } from "react";

/**
 * A static reproduction of a Figma settings panel ("UI magician Agent").
 *
 * Deliberately self-contained: no props, no state, no data, and not part of any
 * route. It exists as a smoke test of the design-to-component path, so its
 * colours and measures follow the frame rather than this app's token system.
 */

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  /** The frame draws the second field with a heavier border and smaller text. */
  emphasis?: boolean;
}

const Field = ({
  id,
  label,
  placeholder,
  className,
  emphasis = false,
}: FieldProps) => (
  <div className={className}>
    <div className="mb-2.5 flex items-center gap-1.5">
      <label
        htmlFor={id}
        className="text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]"
      >
        {label}
      </label>
      <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden="true" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "w-full bg-[#272822] px-[21px] font-semibold placeholder:text-[#737470]",
        emphasis
          ? "h-[41px] border-2 border-[#929291] text-[10.5px]"
          : "h-[39px] border border-[#a5adad] text-[11.5px]"
      )}
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pt-5 pb-[62px] font-[Inter,ui-sans-serif,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={15} className="text-[#b5b5b5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex min-w-0 items-center gap-2">
      <FiChevronUp
        size={12}
        className="shrink-0 text-[#8b9291]"
        aria-hidden="true"
      />
      <span className="truncate text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2.5">
      <FiChevronUp
        size={16}
        className="shrink-0 text-[#b2b2b1]"
        aria-hidden="true"
      />
      <span className="text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      id="testcard-access-token"
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testcard-design-url"
      className="mt-2.5"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      emphasis
    />

    <div className="mt-5 ml-6 flex items-center gap-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <p className="mt-[47px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
