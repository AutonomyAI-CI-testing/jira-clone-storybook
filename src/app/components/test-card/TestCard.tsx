import {
  AiOutlineInfoCircle,
  AiOutlineSetting,
  AiOutlineUp,
} from "react-icons/ai";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-base">
        {label}
      </label>
      <AiOutlineInfoCircle
        aria-hidden="true"
        className="text-icon-subtle"
        size={16}
      />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-border-bold bg-background-input p-4 font-primary-light text-sm text-font placeholder:text-font-subtlest"
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
    className="w-[508px] bg-elevation-surface-sunken px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded-full p-1 text-icon hover:bg-background-neutral"
      >
        <AiOutlineSetting size={24} />
      </button>
    </div>

    <div className="mt-12 flex items-center gap-2 text-font-subtle">
      <AiOutlineUp size={18} />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <AiOutlineUp size={22} />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-12">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <button
        type="button"
        className="rounded-md bg-[var(--Orange800)] px-8 py-3 font-primary-bold text-lg text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-md bg-[var(--Orange800)] px-8 py-3 font-primary-bold text-lg text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-14 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
