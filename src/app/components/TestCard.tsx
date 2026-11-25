import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const fields: FieldProps[] = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actions = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[15px] text-[#c0c0c0]">
        {label}
      </label>
      <IoInformationCircleOutline
        size={20}
        aria-hidden
        className="shrink-0 text-[#c0c0c0]"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[#8a8a8a] bg-transparent px-3.5 py-4 text-[15px] text-[#c7c7c7] outline-none placeholder:text-[#7a7a7a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained and prop-less: it renders the frame's copy and controls
 * as drawn, with nothing behind them.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-12 text-[#c7c7c7]"
  >
    <header className="flex items-start justify-between">
      <h1 className="text-xl font-semibold text-[#d5d5d5]">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="cursor-pointer text-[#d5d5d5]"
      >
        <IoSettingsOutline size={26} />
      </button>
    </header>

    <div className="mt-7 flex items-center gap-3 text-base text-[#b8b8b8]">
      <IoChevronUpOutline size={20} aria-hidden className="shrink-0" />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="mt-24 flex items-center gap-3 text-xl font-semibold text-[#d5d5d5]">
      <IoChevronUpOutline size={20} aria-hidden className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-9 space-y-7">
      {fields.map((field) => (
        <Field key={field.id} {...field} />
      ))}
    </div>

    <div className="mt-9 flex gap-9 pl-12">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="w-[170px] cursor-pointer rounded-md bg-[#a43d10] py-5 text-lg text-[#8f8f8f]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-24 text-xl font-semibold text-[#d5d5d5]">
      Recent Breakdowns
    </h2>
  </div>
);
