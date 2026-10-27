import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

const ACTION_BUTTON_CLASS =
  "rounded-lg bg-[#a8461a] px-8 py-3 font-primary-bold text-lg text-white hover:bg-[#8f3b16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand";

const INPUT_CLASS =
  "mt-3 w-full rounded-md border-none bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-bold placeholder:text-font-subtle focus:bg-background-input-pressed focus:outline-border-brand";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-icon-subtle hover:text-icon"
      >
        <IoSettingsOutline size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <RiArrowUpSLine aria-hidden size={26} className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <RiArrowUpSLine aria-hidden size={30} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-3 flex justify-center gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={ACTION_BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-base text-font-subtle">
        {label}
      </label>
      <RiInformationLine
        aria-hidden
        size={20}
        className="shrink-0 text-icon-subtle"
      />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
