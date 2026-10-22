import cx from "classix";

/**
 * Static reproduction of the "UI magician Agent" Figma frame. Self-contained:
 * it takes no props and holds no state, so the two fields are display-only.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 pb-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-4 text-[#b5b5b5]" />
    </div>

    <div className="mt-[14px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
      <span className="truncate font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
      <span className="font-primary-bold text-sm text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldRow
      className="mt-[26px]"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      placeholderClassName="text-[#737470]"
      fieldClassName="h-9 border border-[#a5adad]"
    />

    <FieldRow
      className="mt-[9px]"
      label="Design URL"
      labelClassName="text-[#a3a3a2]"
      placeholder="https://www.figma.com/file/:"
      placeholderClassName="text-[#71726e]"
      fieldClassName="h-[37px] border-2 border-[#929291]"
    />

    <div className="mt-[22px] flex justify-center gap-4">
      <button
        type="button"
        className="w-[85px] rounded bg-[#843a17] py-2 font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded bg-[#843a17] py-2 font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] font-primary-bold text-sm text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const FieldRow = ({
  className,
  label,
  labelClassName,
  placeholder,
  placeholderClassName,
  fieldClassName,
}: FieldRowProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className={cx("font-primary-bold text-2xs", labelClassName)}>
        {label}
      </span>
      <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
    </div>
    <div
      className={cx(
        "mt-3 flex items-center bg-[#272822] px-5",
        fieldClassName
      )}
    >
      <span
        className={cx(
          "truncate font-primary-bold text-2xs",
          placeholderClassName
        )}
      >
        {placeholder}
      </span>
    </div>
  </div>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.4v3.4" strokeLinecap="round" />
    <circle cx="8" cy="5.2" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface FieldRowProps {
  className?: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  placeholderClassName: string;
  fieldClassName: string;
}
