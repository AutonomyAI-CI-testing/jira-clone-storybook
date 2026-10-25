import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const FIELD_CLASSES =
  "w-full rounded-md border border-border-bold bg-background-input p-3 font-primary-light text-sm placeholder:text-font-subtlest";

const BUTTON_CLASSES =
  "h-14 w-[170px] rounded-md bg-[var(--Orange800)] font-primary text-lg text-font-inverse duration-150 ease-in-out hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" panel.
 * Self-contained — takes no props and holds no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface-sunken px-10 py-8 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <RiSettings3Line size={24} className="text-icon" aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <RiArrowUpSLine size={20} className="shrink-0" aria-hidden />
      <span className="font-primary text-sm">From entire frame to a singl…</span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <RiArrowUpSLine size={24} className="shrink-0" aria-hidden />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex justify-center gap-8">
      {BUTTON_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-12 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm">
        {label}
      </label>
      <RiInformationLine size={18} className="text-icon-subtle" aria-hidden />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={FIELD_CLASSES} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
