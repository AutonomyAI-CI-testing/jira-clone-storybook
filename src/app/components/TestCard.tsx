import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-6 block">
    <span className="flex items-center justify-between">
      <span className="font-primary-light text-sm text-font-subtle">
        {label}
      </span>
      <IoInformationCircleOutline size={18} className="text-font-subtle" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[56px] w-full rounded border border-border-bold bg-elevation-surface-sunken px-4 font-primary text-sm text-font outline-none placeholder:text-font-subtlest"
    />
  </label>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[60px] w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--Neutral0)] hover:bg-[var(--Orange900)]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-font-subtle hover:text-font"
      >
        <IoSettingsOutline size={24} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2">
      <IoChevronUp size={18} className="shrink-0 text-font-subtle" />
      <p className="truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a single component
      </p>
    </div>

    <section className="mt-40">
      <div className="flex items-center gap-2">
        <IoChevronUp size={22} />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-12 flex justify-center gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </section>

    <h2 className="mt-20 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
