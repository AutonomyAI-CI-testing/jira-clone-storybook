import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface-sunken px-9 py-10"
    >
      <header className="flex items-start justify-between gap-4">
        <span className="font-primary-bold text-2xl text-font">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={26}
          className="shrink-0 text-icon"
          aria-hidden
        />
      </header>

      <div className="mt-8 flex items-center gap-4">
        <IoChevronUp
          size={16}
          className="shrink-0 text-icon-subtle"
          aria-hidden
        />
        <span className="font-primary text-base text-font-subtle">
          From entire frame to a singl…
        </span>
      </div>

      <section className="mt-32 flex flex-col gap-8">
        <h2 className="flex items-center gap-3 font-primary-bold text-2xl text-font">
          <IoChevronUp size={22} className="shrink-0" aria-hidden />
          Add New Design
        </h2>

        <TextField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <TextField
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="mt-2 flex gap-9">
          {ACTIONS.map((action) => (
            <button
              key={action}
              type="button"
              className="rounded bg-background-danger-bold px-10 py-4 font-primary text-lg text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed"
            >
              {action}
            </button>
          ))}
        </div>
      </section>

      <h2 className="mt-24 font-primary-bold text-2xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const TextField = ({ label, placeholder }: TextFieldProps): JSX.Element => {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center justify-between gap-4">
        <span className="font-primary text-lg text-font-subtle">{label}</span>
        <IoInformationCircleOutline
          size={22}
          className="shrink-0 text-icon-subtle"
          aria-hidden
        />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border-none bg-background-input px-5 py-4 font-primary-light text-base text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest"
      />
    </label>
  );
};

interface TextFieldProps {
  label: string;
  placeholder: string;
}
