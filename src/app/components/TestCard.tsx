import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" panel
 * from the cropped Figma frame. It is self-contained (no props, no state) and
 * is not wired into any route or screen.
 *
 * The frame's palette (a warm dark UI) has no counterpart in the semantic token
 * layer, so the colours are carried as literal values on purpose.
 */

const TITLE = "text-[13.5px]/[16.34px] font-semibold";
const META = "text-[11.5px]/[13.92px] font-semibold";
const ICON = "h-4 w-4 shrink-0";

interface ActionButtonProps {
  children: ReactNode;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

interface FieldProps {
  className?: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  inputClassName: string;
}

const Field = ({
  className,
  label,
  labelClassName,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={cx("mt-3", className)}>
    <div className="flex items-center gap-2">
      <span className={cx(META, labelClassName)}>{label}</span>
      <FiInfo
        aria-label={`About the ${label.toLowerCase()}`}
        className={cx(ICON, labelClassName)}
      />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full bg-[#272822] px-4 font-semibold",
        inputClassName
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="flex w-[254px] flex-col bg-black p-5">
    <div className="flex items-center justify-between">
      <span className={cx(TITLE, "text-[#b5b5b5]")}>UI magician Agent</span>
      <FiSettings
        aria-label="Open settings"
        className={cx(ICON, "text-[#b5b5b5]")}
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-2.5 w-2.5 shrink-0 text-[#8b9291]" />
      <span className={cx(META, "truncate text-[#8b9291]")}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[84px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-3 w-3 shrink-0 text-[#b2b2b1]" />
      <span className={cx(TITLE, "text-[#b2b2b1]")}>Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <Field
      label="Design URL"
      labelClassName="text-[#a3a3a2]"
      placeholder="https://www.figma.com/file/:"
      inputClassName="border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <span className={cx(TITLE, "mt-[46px] text-[#b0b0b0]")}>
      Recent Breakdowns
    </span>
  </div>
);
