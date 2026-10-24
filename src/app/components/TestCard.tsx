import { Fragment } from "react";
import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const FIELDS: FieldConfig[] = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
    labelClassName: "text-[#a4a4a3]",
    wrapperClassName: "mt-7",
    inputClassName: "mt-3 h-9 border border-[#a5adad] text-[11.5px]",
  },
  {
    id: "test-card-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    labelClassName: "text-[#a3a3a2]",
    wrapperClassName: "mt-[11px]",
    inputClassName: "mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px]",
  },
];

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" panel from
 * the Figma frame (254x508, dark). Self-contained — no props, no state, no data.
 *
 * The frame's palette has no counterpart in the app's semantic token layer, so
 * its colours are written here as Tailwind arbitrary values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <IoSettingsOutline
        aria-hidden="true"
        size={16}
        className="text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <IoChevronUp aria-hidden="true" size={8} className="text-[#8b9291]" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5 pl-1.5">
      <IoChevronUp aria-hidden="true" size={12} className="text-[#b2b2b1]" />
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    {FIELDS.map((field) => (
      <Fragment key={field.id}>
        <div className={cx("flex items-center gap-3", field.wrapperClassName)}>
          <label
            htmlFor={field.id}
            className={cx(
              "font-primary-bold text-[11.5px] leading-[13.92px]",
              field.labelClassName
            )}
          >
            {field.label}
          </label>
          <IoInformationCircleOutline
            aria-hidden="true"
            size={15}
            className={field.labelClassName}
          />
        </div>
        <input
          id={field.id}
          type="text"
          placeholder={field.placeholder}
          className={cx(
            "w-full bg-[#272822] px-[19px] placeholder:text-[#737470]",
            field.inputClassName
          )}
        />
      </Fragment>
    ))}

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldConfig {
  id: string;
  label: string;
  placeholder: string;
  labelClassName: string;
  wrapperClassName: string;
  inputClassName: string;
}
