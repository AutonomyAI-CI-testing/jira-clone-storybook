import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-4">
    <span className="flex items-center gap-3">
      <span className="font-primary-bold text-lg text-font">{label}</span>
      <FiInfo aria-hidden className="shrink-0 text-font-subtle" size={22} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border border-border-bold bg-background-input px-4 py-4 text-lg text-font placeholder:text-font-subtle"
    />
  </label>
);

/* The design's action buttons are burnt orange, which the semantic palette has
   no role for, so the fill comes from the base orange ramp. */
const actionButtonClass =
  "flex-1 cursor-pointer rounded-md bg-[var(--Orange800)] px-6 py-5 font-primary-bold text-lg text-white";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[508px] flex-col gap-10 bg-elevation-surface px-10 py-12 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl text-font">UI magician Agent</h2>
      <FiSettings aria-hidden className="shrink-0 text-font-subtle" size={30} />
    </div>

    <div className="flex items-center gap-3">
      <FiChevronUp aria-hidden className="shrink-0 text-font-subtle" size={22} />
      <span className="min-w-0 truncate text-lg text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <FiChevronUp aria-hidden className="shrink-0 text-font" size={24} />
        <h2 className="font-primary-bold text-2xl text-font">Add New Design</h2>
      </div>

      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </section>

    <div className="flex gap-9">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="font-primary-bold text-2xl text-font">Recent Breakdowns</h2>
  </div>
);
