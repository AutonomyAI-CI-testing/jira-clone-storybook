import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELDS = [
  {
    id: "testElem-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const FIELD_CLASS =
  "mt-6 h-[60px] w-full rounded border border-[var(--DarkNeutral600)] bg-transparent px-4 text-lg text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";

const ACTION_BUTTON_CLASS =
  "h-[76px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[var(--DarkNeutral1000)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-9 pb-16 pt-11 font-primary text-[var(--DarkNeutral1000)]"
  >
    {/* Panel header */}
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[var(--DarkNeutral800)]"
      >
        <IoSettingsOutline size={28} />
      </button>
    </div>

    {/* Collapsed summary */}
    <div className="mt-9 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <IoChevronUp size={20} aria-hidden="true" />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-40 flex items-center gap-2">
      <IoChevronUp size={24} aria-hidden="true" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    {/* Token and URL fields */}
    <div className="mt-14 space-y-10">
      {FIELDS.map(({ id, label, placeholder }) => (
        <div key={id}>
          <div className="flex items-center gap-3">
            <label htmlFor={id} className="text-lg">
              {label}
            </label>
            <IoInformationCircleOutline
              size={22}
              aria-hidden="true"
              className="text-[var(--DarkNeutral700)]"
            />
          </div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className={FIELD_CLASS}
          />
        </div>
      ))}
    </div>

    {/* Actions */}
    <div className="mt-14 flex justify-end gap-8">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
