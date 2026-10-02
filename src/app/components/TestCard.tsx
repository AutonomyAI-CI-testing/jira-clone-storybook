import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark min-h-[508px] w-64 bg-black px-5 py-5 font-primary text-xs text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <FiSettings className="text-font-subtle" size={16} aria-hidden="true" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtlest">
      <FiChevronUp size={12} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={14} aria-hidden="true" />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-4 flex gap-3">
      <button
        type="button"
        className="flex-1 rounded bg-[#843a17] px-4 py-2 font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[#843a17] px-4 py-2 font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-8 font-primary-bold">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <>
    <div className="mt-4 flex items-center gap-2 text-2xs text-font-subtle">
      <span>{label}</span>
      <FiInfo size={15} aria-hidden="true" />
    </div>
    <input
      className="mt-1 w-full rounded-sm border-2 border-border-input bg-elevation-surface-raised px-3 py-2 text-2xs text-font-subtlest placeholder:text-font-subtlest"
      placeholder={placeholder}
      readOnly
    />
  </>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export default TestCard;
