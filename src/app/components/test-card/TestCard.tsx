import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "mt-3 h-16 w-full rounded-md border border-[color:var(--DarkNeutral400)] bg-[color:var(--DarkNeutral250)] px-6 font-primary-light text-base text-[color:var(--DarkNeutral1100)] outline-none placeholder:text-[color:var(--DarkNeutral600)]";

const ACTION_CLASSES =
  "h-[70px] flex-1 rounded-md bg-[color:var(--Orange800)] font-primary text-lg text-[color:var(--DarkNeutral900)]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2 text-[color:var(--DarkNeutral900)]">
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <FiInfo size={18} aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_CLASSES}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[color:var(--DarkNeutral100)] p-10 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <FiSettings size={24} aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-3 text-[color:var(--DarkNeutral700)]">
      <FiChevronUp size={20} aria-hidden />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp size={24} aria-hidden />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-8 space-y-6">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-14 flex gap-8">
      <button type="button" className={ACTION_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASSES}>
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
