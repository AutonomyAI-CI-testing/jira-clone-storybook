import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded p-1 text-font hover:bg-background-neutral-hovered"
      >
        <FiSettings aria-hidden size={22} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden className="shrink-0" size={20} />
      <span className="truncate text-sm">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-12">
      <div className="flex items-center gap-3">
        <FiChevronUp aria-hidden className="shrink-0" size={24} />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-10 space-y-6">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-9">
        <Button type="button" className="h-[72px] w-[170px] text-base">
          Awesome
        </Button>
        <Button type="button" className="h-[72px] w-[170px] text-base">
          Prepare
        </Button>
      </div>
    </section>

    <h3 className="mt-14 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-sm text-font">
        {label}
      </label>
      <FiInfo aria-hidden className="shrink-0 text-font-subtlest" size={16} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[60px] w-full rounded-md border-none bg-background-input p-3 text-sm placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
