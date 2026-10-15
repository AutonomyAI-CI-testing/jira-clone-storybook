import cx from "classix";

/**
 * A self-contained reproduction of the "UI magician Agent" Figma frame, used as
 * a smoke test. No props, no state, no data — it renders the same card every time.
 */

const SettingsGear = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUp = ({ width, height }: ChevronUpProps) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoCircle = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.4v4.1" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  doubleBorder,
  className,
}: FieldProps) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-[11.5px] leading-[14px] text-[#a4a4a3]"
    >
      {label}
      <InfoCircle />
    </label>
    <input
      id={id}
      placeholder={placeholder}
      className={cx(
        "mt-[12px] h-[36px] w-full bg-[#272822] px-5 text-[11.5px] leading-[14px] text-[#d0d0d0] outline-none placeholder:text-[#737470]",
        doubleBorder ? "border-2 border-[#929291]" : "border border-[#a5adad]"
      )}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary-bold text-[13.5px] leading-[16px]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[#b5b5b5]">UI magician Agent</span>
      <span className="text-[#d0d0d0]">
        <SettingsGear />
      </span>
    </div>

    <div className="mt-[18px] flex min-w-0 items-center gap-2">
      <span className="shrink-0 text-[#8b9291]">
        <ChevronUp width={8} height={5} />
      </span>
      <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <span className="text-[#d0d0d0]">
        <ChevronUp width={12} height={8} />
      </span>
      <span className="text-[#b2b2b1]">Add New Design</span>
    </div>

    <Field
      id="testcard-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
      className="mt-[28px]"
    />

    <Field
      id="testcard-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      doubleBorder
      className="mt-[11px]"
    />

    <div className="mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);

interface ChevronUpProps {
  width: number;
  height: number;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  doubleBorder?: boolean;
  className?: string;
}
