import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const fields = [
  {
    id: "testElem-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
];

const actions = ["Awesome", "Prepare"];

/**
 * Smoke-test fixture: the static panel from the attached Figma frame.
 * Self-contained on purpose — no props, no state, no handlers, no data.
 * The `dark` class pins the panel to the dark token set whatever theme the
 * surrounding app (or the Storybook toolbar) is on.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex min-h-[508px] w-[254px] flex-col bg-elevation-surface px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xs font-primary-bold">UI magician Agent</h1>
      <IoSettingsOutline size={16} className="text-font-subtle" />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <IoChevronUp size={12} className="shrink-0 text-font-subtle" />
      <span className="truncate text-2xs font-primary-bold text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUp size={14} className="shrink-0 text-font-subtle" />
      <span className="text-xs font-primary-bold text-font-subtle">
        Add New Design
      </span>
    </div>

    <div className="mt-8 space-y-6">
      {fields.map(({ id, label, placeholder }) => (
        <div key={id}>
          <div className="flex items-center gap-1">
            <label
              htmlFor={id}
              className="text-2xs font-primary-bold text-font-subtle"
            >
              {label}
            </label>
            <IoInformationCircleOutline
              size={15}
              className="shrink-0 text-font-subtle"
            />
          </div>
          <input
            id={id}
            readOnly
            placeholder={placeholder}
            className="mt-2 w-full border border-border-input bg-background-input px-3 py-2 text-2xs outline-none placeholder:text-font-subtlest"
          />
        </div>
      ))}
    </div>

    <div className="mt-8 grid grid-cols-2 gap-4 px-6">
      {actions.map((label) => (
        <button
          key={label}
          type="button"
          className="rounded bg-[#843a17] py-2 text-2xs font-primary-bold text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-12 text-xs font-primary-bold text-font-subtle">
      Recent Breakdowns
    </h2>
    <div className="flex-1" />
  </div>
);
