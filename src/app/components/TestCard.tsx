import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const LABEL_CLASS =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";

const INPUT_CLASS =
  "mt-[10px] h-9 w-full border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

const HEADING_CLASS =
  "font-primary-bold text-xs text-[color:var(--Neutral400)]";

const Field = ({
  label,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => (
  <label className="mt-7 block">
    <span className="flex items-center gap-3">
      <span className={LABEL_CLASS}>{label}</span>
      <FaInfoCircle
        aria-hidden="true"
        size={14}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(INPUT_CLASS, inputClassName)}
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] overflow-hidden bg-black">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

    <div className="px-5 pb-[45px] pt-[11px]">
      <div className="flex items-center justify-between">
        <span className={HEADING_CLASS}>UI magician Agent</span>
        <FaCog
          aria-hidden="true"
          size={15}
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden="true"
          size={9}
          className="text-[color:var(--Neutral500)]"
        />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden="true"
          size={13}
          className="text-[color:var(--Neutral400)]"
        />
        <span className={HEADING_CLASS}>Add New Design</span>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputClassName="border"
      />

      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        inputClassName="border-2"
      />

      <div className="mt-[22px] flex gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <div className={cx("mt-[47px]", HEADING_CLASS)}>Recent Breakdowns</div>
    </div>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
}
