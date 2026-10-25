import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/** The panel's accent, taken from the design. No token in the palette is a rust/brown. */
const RUST = "#9c4520";

const rustButtonStyle =
  "w-[170px] rounded-md py-3 font-primary text-base text-white";

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <FaInfoCircle aria-hidden className="text-base text-font-subtlest" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      autoComplete="off"
      placeholder={placeholder}
      className="mt-7 w-full rounded-md border border-border-bold bg-background-input px-4 py-4 font-primary text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

/**
 * Static reproduction of the "UI magician Agent" panel from the design.
 * Self-contained on purpose: no props, no state, no handlers.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-elevation-surface px-9 py-8 pb-32 text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-[22px] leading-7">
          UI magician Agent
        </h2>
        <FaCog aria-hidden className="text-[22px] text-font" />
      </div>

      <div className="mt-10 flex items-center gap-3 text-font-subtlest">
        <FaChevronUp aria-hidden className="shrink-0 text-base" />
        <span className="truncate font-primary text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex items-center gap-3 pt-40">
        <FaChevronUp aria-hidden className="text-base" />
        <h3 className="font-primary-black text-[22px] leading-7">
          Add New Design
        </h3>
      </div>

      <div className="mt-16">
        <Field
          id="testElem-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-10">
        <Field
          id="testElem-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex gap-9">
        <button
          type="button"
          style={{ backgroundColor: RUST }}
          className={rustButtonStyle}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: RUST }}
          className={rustButtonStyle}
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[130px] font-primary-black text-xl leading-7">
        Recent Breakdowns
      </h3>
    </div>
  );
};
