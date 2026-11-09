import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const TITLE_TEXT = "font-primary-bold text-sm text-[color:var(--Neutral400)]";
const LABEL_TEXT =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";
const PLACEHOLDER_TEXT =
  "font-primary-bold text-2xs text-[color:var(--Neutral700)]";

const Field = ({ label, placeholder, variant }: FieldProps): JSX.Element => (
  <>
    <div className="flex items-center gap-5">
      <span className={LABEL_TEXT}>{label}</span>
      <FiInfo
        size={15}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <div
      className={cx(
        "mt-2.5 flex items-center bg-[var(--DarkNeutral200)]",
        variant === "token"
          ? "h-9 border border-[color:var(--DarkNeutral800)] px-[19px]"
          : "h-[37px] border-2 border-[color:var(--Neutral500)] px-5"
      )}
    >
      <span className={PLACEHOLDER_TEXT}>{placeholder}</span>
    </div>
  </>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[58px] pt-5"
  >
    <div className="flex items-start justify-between pr-1">
      <span className={TITLE_TEXT}>UI magician Agent</span>
      <FiSettings
        size={15}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
    </div>

    <div className="mt-[14px] flex items-center gap-[9px] pl-[3px]">
      <FiChevronUp
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral500)]"
      />
      <span className="truncate font-primary-bold text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-[5px] pl-[6px]">
      <FiChevronUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
      <span className={TITLE_TEXT}>Add New Design</span>
    </div>

    <div className="mt-6">
      <Field
        variant="token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-[11px]">
      <Field
        variant="url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <h2 className={cx("mt-[46px]", TITLE_TEXT)}>Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  variant: "token" | "url";
}
