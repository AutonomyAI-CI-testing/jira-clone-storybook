import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-3xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer text-font-subtle transition-colors hover:text-font"
        >
          <FaCog aria-hidden="true" className="text-3xl" />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-4 text-lg text-font-subtle">
        <FaChevronUp aria-hidden="true" className="shrink-0 text-xl" />
        <span>From entire frame to a singl...</span>
      </div>

      <h2 className="mt-32 flex items-center gap-4 font-primary-bold text-2xl">
        <FaChevronUp aria-hidden="true" className="text-lg text-font-subtle" />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-12 flex gap-8">
        <button
          type="button"
          className="cursor-pointer rounded-md bg-[#8f3f18] px-10 py-5 text-lg text-[#b8a49c] transition-colors hover:bg-[#a04a1d] active:bg-[#7a3512]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-md bg-[#8f3f18] px-10 py-5 text-lg text-[#b8a49c] transition-colors hover:bg-[#a04a1d] active:bg-[#7a3512]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div className="mt-10">
      <div className="mb-4 flex items-center gap-4 text-lg text-font-subtle">
        <span>{label}</span>
        <FaInfoCircle aria-hidden="true" className="text-2xl" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border border-border-bold bg-background-input px-6 py-5 text-lg text-font placeholder:text-font-subtlest"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
