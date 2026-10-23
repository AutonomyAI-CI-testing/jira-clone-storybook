import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import { Button } from "@app/components/button";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm text-font-subtle">
        {label}
      </label>
      <FaInfoCircle size={14} className="text-icon-subtle" aria-hidden />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-2 w-full rounded-md border border-border-bold bg-background-input p-3 font-primary text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="dark w-[508px] bg-elevation-surface p-5 font-primary text-font">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-lg">UI magician Agent</h1>
        <FaCog size={20} className="text-icon" aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2 font-primary-light text-sm text-font-subtlest">
        <FaChevronUp size={14} aria-hidden />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-16">
        <h2 className="flex items-center gap-2 font-primary-black text-2xl">
          <FaChevronUp size={18} aria-hidden />
          Add New Design
        </h2>

        <Field
          id="test-card-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="mt-8 flex gap-8">
          <Button color="danger" className="w-[168px] py-3">
            Awesome
          </Button>
          <Button color="danger" className="w-[168px] py-3">
            Prepare
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-primary-black text-xl">Recent Breakdowns</h2>
      </div>
    </div>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
