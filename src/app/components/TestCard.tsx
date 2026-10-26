import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[360px] rounded-md border border-border bg-elevation-surface p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-icon-subtle hover:text-icon"
      >
        <BsGear size={20} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <BsChevronUp size={16} />
      <span className="truncate text-xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <BsChevronUp size={18} />
      <span className="font-primary-bold text-lg">Add New Design</span>
    </div>

    <div className="mt-6 flex flex-col gap-4">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />
    </div>

    <div className="mt-8 flex items-center justify-center gap-4">
      <Button color="danger" variant="contained" className="flex-1 py-3 text-sm">
        Awesome
      </Button>
      <Button color="danger" variant="contained" className="flex-1 py-3 text-sm">
        Prepare
      </Button>
    </div>

    <div className="mt-10 font-primary-bold text-lg">Recent Breakdowns</div>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-xs text-font-subtle">{label}</span>
      <BsInfoCircle size={14} className="text-icon-subtle" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded-md border-none bg-background-input p-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
