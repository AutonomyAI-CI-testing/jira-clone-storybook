import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fields = [
  {
    id: "figma-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "figma-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const inputClass =
  "w-full rounded border border-border-bold bg-background-input px-3 py-3 font-primary-light text-font placeholder:text-font-subtlest";

// The rust fill has no semantic token in the palette, so it stays a literal.
const buttonClass =
  "rounded-md bg-[#9d4a2b] px-6 py-3 font-primary-bold text-font-inverse hover:bg-[#8a3f24] active:bg-[#78351d]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[400px] flex-col gap-6 rounded-md bg-elevation-surface-sunken p-6 text-font"
  >
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <FiSettings className="text-icon-subtle" size={20} aria-hidden />
      </div>
      <div className="flex items-center gap-2">
        <FiChevronUp
          className="shrink-0 text-icon-subtle"
          size={18}
          aria-hidden
        />
        <span className="truncate font-primary-light text-sm text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FiChevronUp className="shrink-0" size={20} aria-hidden />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
      </div>

      {fields.map(({ id, label, placeholder }) => (
        <div key={id} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="font-primary-bold text-sm" htmlFor={id}>
              {label}
            </label>
            <FiInfo className="text-icon-subtle" size={16} aria-hidden />
          </div>
          <input
            id={id}
            className={inputClass}
            placeholder={placeholder}
            readOnly
          />
        </div>
      ))}

      <div className="flex gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
