import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="w-[500px] rounded-md bg-elevation-surface-overlay p-6 font-primary text-font shadow-overlay">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-14 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <FormField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-8 flex gap-4">
        <Button type="button" className="flex-1 py-3">
          Awesome
        </Button>
        <Button type="button" className="flex-1 py-3">
          Prepare
        </Button>
      </div>

      <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  </div>
);

const FormField = ({
  id,
  label,
  placeholder,
}: FormFieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded bg-background-input px-3 py-3 text-font outline outline-2 outline-border placeholder:text-font-subtlest"
    />
  </div>
);

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = (): JSX.Element => (
  <svg {...iconProps} className="shrink-0">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg {...iconProps} className="shrink-0">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} width={20} height={20} className="shrink-0">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
