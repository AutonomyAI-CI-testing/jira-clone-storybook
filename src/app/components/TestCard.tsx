import { Button } from "@app/components/button/button";

/**
 * TestCard — a static, self-contained reproduction of the "UI magician Agent"
 * Figma frame (Test Page - Simple, node 2:2).
 *
 * It accepts no props, holds no state and is not wired into any route: it is
 * rendered on its own so the layout can be looked at.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface-sunken px-10 py-10 font-primary text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-xl text-font">
          UI magician Agent
        </h1>
        <GearIcon className="h-6 w-6 shrink-0 text-font" />
      </div>

      <div className="mt-6 flex items-center gap-4 text-font-subtlest">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-36">
        <h2 className="flex items-center gap-4 font-primary-bold text-xl text-font">
          <ChevronUpIcon className="h-5 w-5 shrink-0" />
          Add New Design
        </h2>

        <div className="mt-12 space-y-6">
          <Field
            id="test-personal-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="test-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-9">
          <Button
            color="danger"
            className="h-[70px] w-[170px] rounded-lg text-lg"
          >
            Awesome
          </Button>
          <Button
            color="danger"
            className="h-[70px] w-[170px] rounded-lg text-lg"
          >
            Prepare
          </Button>
        </div>
      </section>

      <h2 className="mt-28 font-primary-bold text-xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-base text-font">
          {label}
        </label>
        <InfoIcon className="h-5 w-5 shrink-0 text-font-subtle" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-3 h-14 w-full rounded border border-border-bold bg-background-input px-4 text-base text-font outline-none placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      />
    </div>
  );
};

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const GearIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} className={className} {...iconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
};

const ChevronUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={2} className={className} {...iconProps}>
      <path d="M5 15l7-7 7 7" />
    </svg>
  );
};

const InfoIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} className={className} {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
};
