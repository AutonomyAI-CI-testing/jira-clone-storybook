import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS =
  "w-full rounded border border-border-bold bg-background-input px-8 py-5 text-base outline outline-2 outline-transparent placeholder:text-font-subtle focus-visible:outline-border-brand";

const ACTION_CLASS =
  "min-w-[168px] cursor-pointer rounded-lg bg-[color:var(--Orange800)] px-8 py-4 text-lg text-[color:var(--Orange200)] hover:bg-[color:var(--Orange900)] active:bg-[color:var(--Orange700)]";

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3">
      {label}
      <FiInfo aria-hidden="true" className="h-5 w-5 shrink-0" />
    </span>
    <input className={FIELD_CLASS} placeholder={placeholder} />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark mx-auto flex w-full max-w-[508px] flex-col bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer items-center justify-center rounded-full p-1 outline outline-2 outline-transparent hover:outline-border-brand"
      >
        <FiSettings aria-hidden="true" className="h-6 w-6" />
      </button>
    </header>

    <p className="mt-6 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </p>

    <section className="mt-20 flex flex-col gap-8">
      <h2 className="flex items-center gap-2 font-primary-bold text-xl">
        <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />

      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex items-center gap-9">
        <button type="button" className={ACTION_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_CLASS}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-20 font-primary-bold text-xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);
