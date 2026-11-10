import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASS =
  "mt-4 w-full rounded border border-[#a1a1a1] bg-[#262220] px-6 py-5 text-base text-[#d4d4d4] placeholder:text-[#8a8a8a]";

const ACTION_CLASS =
  "min-w-[160px] cursor-pointer rounded-md bg-[#a03c14] px-6 py-5 text-base text-[#d9a48c]";

const FIELDS = [
  {
    id: "testcard-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testcard-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

/**
 * Smoke test: a self-contained reproduction of the "UI magician Agent" panel.
 * Takes no props and holds no state, and is not wired into any route.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[480px] rounded-md bg-[#1c1917] p-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[#d4d4d4]"
      >
        <IoSettingsOutline size={26} />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <IoChevronUp size={20} className="shrink-0 text-[#8a8a8a]" />
      <span className="truncate text-base text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <IoChevronUp size={22} className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-10 space-y-6">
      {FIELDS.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-4">
            <label htmlFor={field.id} className="text-base">
              {field.label}
            </label>
            <IoInformationCircleOutline size={20} className="shrink-0" />
          </div>
          <input
            id={field.id}
            placeholder={field.placeholder}
            className={INPUT_CLASS}
          />
        </div>
      ))}
    </div>

    <div className="mt-8 flex gap-8">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION_CLASS}>
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
