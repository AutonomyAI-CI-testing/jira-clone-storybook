import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col gap-4 bg-elevation-surface p-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline aria-hidden className="shrink-0" size={22} />
      </div>

      <div className="flex items-center gap-2 text-sm text-font-subtle">
        <IoChevronUpOutline aria-hidden className="shrink-0" size={16} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="h-10" />

      <div className="flex items-center gap-2">
        <IoChevronUpOutline aria-hidden className="shrink-0" size={20} />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-5 pt-1">
        {/* The frame's terracotta has no matching semantic token, so it is
            written literally; every other colour is a token. */}
        <button
          type="button"
          className="flex-1 rounded bg-[#b0532a] py-3 font-primary-bold text-sm text-font-subtle"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#b0532a] py-3 font-primary-bold text-sm text-font-subtle"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-auto font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label className="font-primary-light text-sm" htmlFor={id}>
        {label}
      </label>
      <IoInformationCircleOutline
        aria-hidden
        className="shrink-0 text-font-subtle"
        size={16}
      />
    </div>
    <input
      readOnly
      id={id}
      className="w-full rounded-md bg-background-input px-3 py-2 font-primary-light text-sm outline outline-2 outline-border-input placeholder:text-font-subtlest"
      placeholder={placeholder}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
