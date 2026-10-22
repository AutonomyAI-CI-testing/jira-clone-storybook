import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import { Button } from "@app/components/button";

const Field = ({ id, label, value }: FieldProps): JSX.Element => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-light text-sm text-font-subtle"
      >
        {label}
      </label>
      <FaInfoCircle size={14} className="text-icon-subtle" />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      value={value}
      className="mt-2 w-full rounded border border-border-input bg-background-input p-3 font-primary-light text-sm text-font-subtlest outline-none"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  value: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface p-8 text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl">UI magicien Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-2 text-icon hover:bg-background-neutral hover:text-icon-brand"
      >
        <FaCog size={18} />
      </button>
    </div>

    <p className="mt-3 flex items-center gap-2 font-primary-light text-sm text-font-subtle">
      <FaChevronUp size={14} className="shrink-0" />
      From entire frame to a single component
    </p>

    <section className="mt-8">
      <h2 className="flex items-center gap-2 font-primary-bold text-lg">
        <FaChevronUp size={16} className="shrink-0" />
        Add New Design
      </h2>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        value="https://www.figma.com/file/"
      />

      <div className="mt-8 flex gap-3">
        <Button
          color="neutral"
          variant="subtlest"
          className="w-[165px] font-primary-bold text-sm"
        >
          Awesome
        </Button>
        <Button
          color="neutral"
          variant="subtlest"
          className="w-[165px] font-primary-bold text-sm"
        >
          Prepare
        </Button>
      </div>
    </section>

    <h2 className="mt-10 font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);
