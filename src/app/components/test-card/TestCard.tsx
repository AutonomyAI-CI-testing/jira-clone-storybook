import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

import { Button } from "@app/components/button/button";

const TestCardField = ({
  id,
  label,
  type = "text",
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm">
        {label}
      </label>
      <span className="text-icon-subtle" aria-hidden="true">
        <HiInformationCircle size={16} />
      </span>
    </div>

    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className="h-14 rounded bg-background-input px-4 font-primary-light text-base placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface-sunken px-10 py-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <span className="text-icon" aria-hidden="true">
        <HiCog size={22} />
      </span>
    </div>

    <div className="mt-3 flex items-center gap-3 text-font-subtle">
      <HiChevronUp size={18} aria-hidden="true" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-16 flex flex-col gap-6">
      <h3 className="flex items-center gap-3 font-primary-black text-2xl">
        <HiChevronUp size={22} aria-hidden="true" />
        Add New Design
      </h3>

      <TestCardField
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <TestCardField
        id="test-card-design-url"
        label="Design URL"
        type="url"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="flex gap-4 pt-2">
        <Button size="lg" className="flex-1">
          Awesome
        </Button>
        <Button size="lg" className="flex-1">
          Prepare
        </Button>
      </div>
    </section>

    <h3 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);

interface TestCardFieldProps {
  id: string;
  label: string;
  type?: "text" | "url";
  placeholder: string;
}

export default TestCard;
