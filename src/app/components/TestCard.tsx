import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

import { Button } from "@app/components/button";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-2xs text-font-subtlest">
        {label}
      </label>
      <FaInfoCircle
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
        size={12}
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded-md bg-background-input p-3 text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-sm">UI magician Agent</h1>
      <FaCog aria-hidden="true" className="text-icon-subtle" size={14} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
        size={10}
      />
      <span className="truncate text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-8 flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
        size={12}
      />
      <h2 className="font-primary-bold text-sm">Add New Design</h2>
    </div>

    <div className="mt-6">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-4">
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-6 flex items-center gap-4">
      <Button className="flex-1 text-2xs">Awesome</Button>
      <Button color="neutral" variant="subtlest" className="flex-1 text-2xs">
        Prepare
      </Button>
    </div>

    <h2 className="mt-10 font-primary-bold text-sm">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
