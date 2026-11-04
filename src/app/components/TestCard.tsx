import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 font-primary text-lg text-font-subtle">
      {label}
      <FiInfo
        size={18}
        aria-label={`More information about ${label}`}
        className="shrink-0"
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-md border border-border-input bg-background-input p-3 font-primary text-lg text-font placeholder:text-font-subtlest"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl text-font">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex h-8 w-8 items-center justify-center rounded-full text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={20} className="shrink-0 text-font-subtle" />
      <span className="truncate font-primary-light text-lg text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp size={26} className="shrink-0 text-font" />
      <h3 className="font-primary-bold text-2xl text-font">Add New Design</h3>
    </div>

    <div className="mt-10 flex flex-col gap-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex items-center gap-8">
      <Button type="button" color="warning" size="lg">
        Awesome
      </Button>
      <Button type="button" color="warning" size="lg">
        Prepare
      </Button>
    </div>

    <h3 className="mt-16 font-primary-bold text-2xl text-font">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
