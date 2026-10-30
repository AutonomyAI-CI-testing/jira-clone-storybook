import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * The rust accent of the panel being recreated. This repo's token layer
 * (src/app/styles/app.css) has no rust/orange alias, and the nearest semantic
 * hue is a status colour reserved for real data state, so the design's own
 * value is kept here as a literal.
 */
const ACCENT_CLASSES = "bg-[#b4531f] hover:bg-[#9c4719] active:bg-[#8a3f16]";

const PanelButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className={`h-20 w-[170px] rounded-lg font-primary text-xl text-white ${ACCENT_CLASSES}`}
  >
    {label}
  </button>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="text-base font-primary-bold text-font-subtle"
      >
        {label}
      </label>
      <FiInfo aria-hidden className="text-xl text-font-subtle" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-20 w-full rounded border border-border-bold bg-background-input px-6 text-base font-primary-light text-font outline-none placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-primary-bold">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-2xl text-font-subtle hover:bg-background-neutral"
      >
        <FiSettings aria-hidden />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp aria-hidden className="shrink-0 text-xl text-font-subtle" />
      <span className="min-w-0 truncate text-base font-primary-light text-font-subtle">
        From entire frame to a single element
      </span>
    </div>

    <h2 className="mt-32 flex items-center gap-3 text-2xl font-primary-bold">
      <FiChevronUp aria-hidden />
      Add New Design
    </h2>

    <div className="mt-12 flex flex-col gap-5">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h2 className="mt-24 text-2xl font-primary-bold">Recent Breakdowns</h2>
  </div>
);
