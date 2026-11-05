import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASS =
  "mt-3 h-16 w-full rounded border border-border-bold bg-elevation-surface-sunken px-4 text-base text-font placeholder:text-font-subtlest";

const BUTTON_CLASS =
  "h-[60px] w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-font";

const BUTTON_LABELS = ["Awesome", "Prepare"];

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <IoInformationCircleOutline
        aria-hidden
        size={20}
        className="text-icon-subtle"
      />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-9 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <IoSettingsOutline aria-hidden size={28} className="text-icon-subtle" />
    </div>

    <div className="mt-7 flex items-center gap-3 text-base text-font-subtle">
      <IoChevronUpOutline aria-hidden size={18} />
      <span>From entire frame to a singl…</span>
    </div>

    <div className="mt-32">
      <div className="flex items-center gap-3">
        <IoChevronUpOutline aria-hidden size={24} />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-5">
        <Field
          id="testElem-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex items-center gap-8">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
