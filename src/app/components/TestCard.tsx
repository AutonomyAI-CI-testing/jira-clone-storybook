import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static recreation of the "UI magician Agent" frame.
 *
 * Self-contained smoke test: it takes no props, holds no state and triggers no
 * behaviour. The frame is a dark chrome, so the panel surface, the ink and the
 * warm action colour are literal values here — the app's semantic tokens have
 * no dark panel or orange. Radii, spacing and type come from the design system.
 */
const fieldLabelClass = "text-[16px] text-[#c7c7c7]";
const fieldInputClass =
  "mt-3 h-[60px] w-full rounded border border-[#4a4a4a] bg-[#252525] px-5 text-[16px] text-[#e8e8e8] placeholder:text-[#8a8a8a]";
const actionButtonClass =
  "h-[55px] w-[170px] rounded bg-[#a8471c] text-[18px] text-[#c9c9c9] hover:bg-[#b9501f]";
const sectionHeadingClass = "font-primary-bold text-[20px] text-[#e8e8e8]";
const fieldIconClass = "text-[#b0b0b0]";
const iconButtonClass = "rounded p-1 text-[#b0b0b0] hover:text-[#e8e8e8]";
const collapsedRowClass = "mt-7 flex items-center gap-3 text-[15px] text-[#b0b0b0]";

const fields = [
  {
    id: "testElem-personal-access-token",
    name: "personalAccessToken",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    name: "designUrl",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] px-10 py-10 font-primary text-[#e8e8e8]"
  >
    <header className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[22px] leading-none">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Agent settings"
        className={iconButtonClass}
      >
        <FiSettings size={26} aria-hidden="true" />
      </button>
    </header>

    <div className={collapsedRowClass}>
      <FiChevronUp size={20} aria-hidden="true" />
      <span>From entire frame to a singl…</span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp size={24} aria-hidden="true" />
      <h2 className={sectionHeadingClass}>Add New Design</h2>
    </div>

    <div className="mt-20 flex flex-col gap-10">
      {fields.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-3">
            <label htmlFor={field.id} className={fieldLabelClass}>
              {field.label}
            </label>
            <FiInfo size={20} aria-hidden="true" className={fieldIconClass} />
          </div>
          <input
            id={field.id}
            name={field.name}
            type="text"
            placeholder={field.placeholder}
            className={fieldInputClass}
          />
        </div>
      ))}
    </div>

    <div className="mt-11 flex gap-9">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className={cx("mt-24", sectionHeadingClass)}>Recent Breakdowns</h2>
  </div>
);
