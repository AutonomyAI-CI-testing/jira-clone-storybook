import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputClassName =
  "mt-2 w-full rounded border border-[var(--DarkNeutral400)] " +
  "bg-[var(--DarkNeutral250)] px-4 py-3 font-primary-light text-sm " +
  "text-[var(--Neutral500)]";

const buttonClassName =
  "rounded-md bg-[var(--Orange700)] px-10 py-3 font-primary-bold " +
  "text-base text-[var(--DarkNeutral900)]";

const fields = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    value: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    value: "https://www.figma.com/file/:",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[440px] bg-[var(--DarkNeutral0)] p-6 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings size={24} aria-hidden="true" />
    </div>

    <div className="mt-4 flex items-center gap-3 text-[var(--Neutral500)]">
      <FiChevronUp size={16} aria-hidden="true" className="shrink-0" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-6 space-y-4">
      {fields.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-3">
            <label
              htmlFor={field.id}
              className="font-primary-bold text-base"
            >
              {field.label}
            </label>
            <FiInfo size={18} aria-hidden="true" />
          </div>
          <input
            id={field.id}
            readOnly
            defaultValue={field.value}
            className={inputClassName}
          />
        </div>
      ))}
    </div>

    <div className="mt-8 flex gap-6">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
