import { MdInfoOutline, MdKeyboardArrowUp, MdOutlineSettings } from "react-icons/md";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-lg text-font-subtle">
        {label}
      </label>
      <MdInfoOutline aria-hidden className="text-xl text-font-subtle" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md bg-background-input px-6 py-5 font-primary text-lg text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="cursor-pointer rounded-md bg-[var(--Orange800)] px-10 py-5 font-primary text-lg text-font hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col rounded-md bg-elevation-surface-sunken px-10 py-10"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-font">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <MdOutlineSettings aria-hidden className="text-3xl" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <MdKeyboardArrowUp aria-hidden className="shrink-0 text-2xl" />
      <span className="max-w-[300px] truncate font-primary-light text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <MdKeyboardArrowUp aria-hidden className="shrink-0 text-2xl" />
        <h2 className="font-primary-bold text-2xl text-font">Add New Design</h2>
      </div>

      <Field
        id="figma-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field id="figma-url" label="Design URL" placeholder="https://www.figma.com/file/:" />

      <div className="flex gap-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl text-font">Recent Breakdowns</h2>
  </div>
);
