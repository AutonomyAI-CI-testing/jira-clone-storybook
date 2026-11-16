import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELDS = [
  {
    id: "testElem-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
] as const;

const ACTIONS = ["Awesome", "Prepare"] as const;

const FIELD_INPUT_CLASS =
  "h-12 w-full rounded border border-border bg-background-input px-3 text-base text-font placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "h-14 w-[170px] rounded-md bg-background-brand-bold font-primary-bold text-base text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface px-9 py-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline size={24} className="text-icon" aria-hidden="true" />
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <IoChevronUpOutline size={20} aria-hidden="true" />
        <span className="min-w-0 truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-20 flex flex-col gap-6">
        <h3 className="flex items-center gap-2 font-primary-bold text-lg">
          <IoChevronUpOutline size={20} aria-hidden="true" />
          Add New Design
        </h3>

        {FIELDS.map(({ id, label, placeholder }) => (
          <div key={id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor={id} className="text-base text-font-subtle">
                {label}
              </label>
              <IoInformationCircleOutline
                size={20}
                className="text-icon-subtle"
                aria-hidden="true"
              />
            </div>
            <input
              id={id}
              type="text"
              placeholder={placeholder}
              className={FIELD_INPUT_CLASS}
            />
          </div>
        ))}

        <div className="flex gap-8">
          {ACTIONS.map((label) => (
            <button key={label} type="button" className={ACTION_BUTTON_CLASS}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
}
