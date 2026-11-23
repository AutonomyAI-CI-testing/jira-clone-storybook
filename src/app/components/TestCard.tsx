import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const FIELD_STYLES =
  "rounded-md border border-border-bold bg-background-input p-3 font-primary-light text-font outline-none placeholder:text-font-subtlest";

// The frame's burnt-orange button fill has no semantic token, so it is written
// as a one-off value here rather than inventing a new token.
const ACTION_BUTTON_STYLES =
  "rounded-md bg-[#8b3d12] px-6 py-3 font-primary-bold text-lg text-font hover:bg-[#7a3410] active:bg-[#6b2d0e]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-lg">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        size={18}
        className="text-icon-subtle"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_STYLES}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col bg-elevation-surface p-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <HiOutlineCog aria-hidden size={24} className="text-icon-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 font-primary-light text-font-subtle">
      <HiChevronUp aria-hidden size={20} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <HiChevronUp aria-hidden size={24} />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="flex gap-4">
        <button type="button" className={ACTION_BUTTON_STYLES}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_STYLES}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
