import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";
import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[440px] rounded-md bg-elevation-surface-sunken p-6 shadow-md"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-base text-font">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer items-center rounded-full p-1 text-font-subtle hover:bg-background-neutral-hovered"
      >
        <HiCog size={18} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <HiChevronUp size={16} className="shrink-0 text-font-subtle" />
      <span className="min-w-0 truncate font-primary-light text-xs text-font-subtlest">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <HiChevronUp size={16} className="shrink-0 text-font" />
      <h3 className="font-primary-bold text-base text-font">Add New Design</h3>
    </div>

    <div className="mt-5 flex flex-col gap-5">
      <TestCardField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        hint="The Figma personal access token used to read the file"
      />
      <TestCardField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        hint="The Figma file URL to break down"
      />
    </div>

    <div className="mt-6 flex items-center gap-4">
      <Button
        type="button"
        color="danger"
        variant="contained"
        className="flex-1 py-3"
      >
        Awesome
      </Button>
      <Button
        type="button"
        color="danger"
        variant="contained"
        className="flex-1 py-3"
      >
        Prepare
      </Button>
    </div>

    <h3 className="mt-14 font-primary-bold text-base text-font">
      Recent Breakdowns
    </h3>
  </div>
);

const TestCardField = ({
  id,
  label,
  placeholder,
  hint,
}: TestCardFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-light text-xs text-font-subtle"
      >
        {label}
      </label>
      <HiInformationCircle
        aria-hidden="true"
        size={14}
        className="shrink-0 text-font-subtle"
      />
      <span className="sr-only">{hint}</span>
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border border-border-bold bg-elevation-surface-raised p-3 font-primary-light text-xs text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface TestCardFieldProps {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
}
