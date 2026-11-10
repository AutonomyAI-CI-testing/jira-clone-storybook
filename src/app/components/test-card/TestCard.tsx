import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASS =
  "mt-3 h-16 w-full rounded border-2 border-border-bold bg-background-input px-4 font-primary text-base text-font outline-none placeholder:text-font-subtlest";

const BUTTON_CLASS =
  "rounded-lg bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-base text-[color:var(--Neutral0)]";

const FieldLabel = ({ children }: { children: string }): JSX.Element => (
  <div className="mt-6 flex items-center gap-3 text-font-subtle">
    <span className="text-base">{children}</span>
    <IoInformationCircleOutline aria-hidden="true" size={20} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden="true" className="text-icon" size={24} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-font-subtle">
        <IoChevronUpOutline aria-hidden="true" size={20} />
        <span className="min-w-0 truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <IoChevronUpOutline aria-hidden="true" size={22} />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />

      <FieldLabel>Design URL</FieldLabel>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASS}
      />

      <div className="mt-6 flex gap-4">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};
