import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_LABEL_CLASS =
  "flex items-center gap-2 font-primary-light text-sm text-font-subtle";

const INPUT_CLASS =
  "mt-3 h-[65px] w-full rounded border border-border-bold bg-elevation-surface-raised px-4 font-primary text-base text-font placeholder:text-font-subtlest";

const ACTION_CLASS =
  "h-[68px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[var(--DarkNeutral900)]";

const ACTION_LABELS = ["Awesome", "Prepare"];

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="mt-10 block">
      <span className={FIELD_LABEL_CLASS}>
        {label}
        <IoInformationCircleOutline aria-hidden="true" size={20} />
      </span>
      <input className={INPUT_CLASS} placeholder={placeholder} />
    </label>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pt-10 pb-20 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden="true" className="text-icon" size={22} />
      </div>

      <div className="mt-8 flex items-center gap-2 text-font-subtle">
        <IoChevronUp aria-hidden="true" size={18} />
        <span className="font-primary-light text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-[150px] flex items-center gap-3 font-primary-bold text-2xl">
        <IoChevronUp aria-hidden="true" size={22} />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-12 flex gap-8 pl-12">
        {ACTION_LABELS.map((label) => (
          <button key={label} type="button" className={ACTION_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
}
