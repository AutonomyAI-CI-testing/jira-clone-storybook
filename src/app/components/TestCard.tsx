import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Standalone replica of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no routing. It uses the
 * frame's own literal colours because the repo's semantic palette has no rust
 * ramp and mapping the panel onto theme tokens would change its look per theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 pb-16 pt-10 font-primary text-[#f0f0f0]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[#d5d5d5]"
      >
        <HiOutlineCog size={26} />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3 text-sm text-[#b8b8b8]">
      <HiOutlineChevronUp size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <HiOutlineChevronUp size={26} className="shrink-0" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-9 space-y-6">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[15px] text-[#c9c9c9]">
        {label}
      </label>
      <HiOutlineInformationCircle size={20} className="text-[#d5d5d5]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[62px] w-full rounded-[2px] border border-[#9a9a9a] bg-[#141414] px-4 text-[15px] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-16 flex-1 rounded-[7px] bg-[#9c4520] text-base text-[#9f948d]"
  >
    {children}
  </button>
);

interface ActionButtonProps {
  children: string;
}
