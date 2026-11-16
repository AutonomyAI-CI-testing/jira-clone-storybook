import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS =
  "mt-2 h-[56px] w-full rounded-md border border-[var(--Neutral600)] bg-transparent px-4 font-primary-light text-[17px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]";

const ACTION_CLASS =
  "w-[170px] rounded-md bg-[var(--Orange800)] py-3 font-primary-bold text-[18px] text-[var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-[22px]">UI magician Agent</h2>
      <FiSettings
        size={24}
        aria-hidden="true"
        className="text-[var(--DarkNeutral1100)]"
      />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <FiChevronUp
        size={18}
        aria-hidden="true"
        className="shrink-0 text-[var(--DarkNeutral800)]"
      />
      <span className="truncate font-primary-light text-[17px] text-[var(--DarkNeutral800)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[120px] flex items-center gap-2">
      <FiChevronUp
        size={22}
        aria-hidden="true"
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <h3 className="font-primary-black text-[24px]">Add New Design</h3>
    </div>

    <div className="mt-8 space-y-6">
      <Field
        id="testElem-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="ml-12 mt-8 flex gap-8">
      <button type="button" className={ACTION_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-black text-[22px] text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary text-[17px] text-[var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <FiInfo
        size={18}
        aria-hidden="true"
        className="text-[var(--DarkNeutral800)]"
      />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={FIELD_CLASS} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
