import cx from "classix";

const SETTINGS_ICON_PATH =
  "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z";

const INFO_ICON_PATH =
  "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z";

const CHEVRON_UP_ICON_PATH = "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z";

const headingClass =
  "font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]";
const fieldLabelClass = "font-primary-bold text-[11.5px] leading-[13.92px]";
const fieldClass =
  "block w-full bg-[var(--DarkNeutral200)] font-primary-bold leading-[12.71px] outline-none";

interface GlyphProps {
  path: string;
  size: number;
  className?: string;
}

const Glyph = ({ path, size, className }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path d={path} />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className={headingClass}>UI magician Agent</span>
      <Glyph
        path={SETTINGS_ICON_PATH}
        size={16}
        className="text-[var(--DarkNeutral900)]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <Glyph path={CHEVRON_UP_ICON_PATH} size={12} />
      <span className={fieldLabelClass}>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <Glyph
        path={CHEVRON_UP_ICON_PATH}
        size={14}
        className="text-[var(--DarkNeutral900)]"
      />
      <span className={headingClass}>Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <span className={fieldLabelClass}>Personal Access Token</span>
      <Glyph path={INFO_ICON_PATH} size={15} />
    </div>
    <input
      readOnly
      value="figd_xxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className={cx(
        fieldClass,
        "mt-[12px] h-[36px] border border-[color:var(--DarkNeutral800)] px-[19px] text-[11.5px] text-[var(--DarkNeutral500)]"
      )}
    />

    <div className="mt-[11px] flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <span className={fieldLabelClass}>Design URL</span>
      <Glyph path={INFO_ICON_PATH} size={15} />
    </div>
    <input
      readOnly
      value="https://www.figma.com/file/:"
      aria-label="Design URL"
      className={cx(
        fieldClass,
        "mt-[11px] h-[37px] border-2 border-[color:var(--DarkNeutral700)] px-5 text-[10.5px] text-[var(--DarkNeutral500)]"
      )}
    />

    <div className="mt-[23px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--DarkNeutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--DarkNeutral600)]"
      >
        Prepare
      </button>
    </div>

    <p className={cx("mt-[46px]", headingClass)}>Recent Breakdowns</p>
  </div>
);
