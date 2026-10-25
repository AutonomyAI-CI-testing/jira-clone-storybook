import cx from "classix";
import { FaCog } from "react-icons/fa";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

const FIELDS = [
  {
    id: "test-card-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const INPUT_CLASS = cx(
  "mt-3 w-full rounded-md border border-border-bold bg-background-input px-4 py-4",
  "font-primary-light text-base text-font placeholder:text-font-subtlest"
);

const ACTION_CLASS = cx(
  "w-[170px] rounded-lg bg-[var(--Orange800)] px-6 py-4",
  "font-primary text-lg text-[var(--DarkNeutral-100)]"
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md bg-elevation-surface-sunken px-10 pb-10 pt-12 text-font"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="rounded p-1 text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
        >
          <FaCog size={22} />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-2 text-font-subtle">
        <HiChevronUp size={18} />
        <span className="font-primary-light text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-2">
        <HiChevronUp size={22} />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      {FIELDS.map(({ id, label, placeholder }, index) => (
        <div key={id} className={cx(index === 0 ? "mt-14" : "mt-6")}>
          <div className="flex items-center gap-2">
            <label
              htmlFor={id}
              className="font-primary text-base text-font-subtle"
            >
              {label}
            </label>
            <HiOutlineInformationCircle
              size={20}
              aria-hidden="true"
              className="text-font-subtlest"
            />
          </div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={INPUT_CLASS}
          />
        </div>
      ))}

      <div className="mt-9 flex items-center gap-9">
        {ACTIONS.map((label) => (
          <button key={label} type="button" className={ACTION_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
    </div>
  );
};
