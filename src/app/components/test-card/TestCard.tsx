import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: an approximate reproduction of the attached Figma
 * panel. Colours and spacing are eyeballed from the frame rather than resolved
 * from the design system's semantic tokens, which is intentional here — the
 * frame is a dark surface with no equivalent role token.
 *
 * Static on purpose: no props, no state, no event handlers.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#161a1d] px-10 py-12 font-primary text-[#9fadbc]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#dee4ea]">
          UI magician Agent
        </h1>
        <FiSettings aria-hidden size={24} className="text-[#dee4ea]" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <FiChevronUp aria-hidden size={20} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <FiChevronUp aria-hidden size={22} className="text-[#dee4ea]" />
        <h2 className="font-primary-bold text-xl text-[#dee4ea]">
          Add New Design
        </h2>
      </div>

      <div className="mt-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      <div className="mt-10 flex gap-8">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <h3 className="mt-24 font-primary-bold text-xl text-[#9fadbc]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="flex items-center gap-6 text-base">
      {label}
      <FiInfo aria-hidden size={20} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border-2 border-[#b3b9c4] bg-[#22272b] px-4 py-3 text-base text-[#dee4ea] placeholder:text-[#738496] focus:outline-none"
    />
  </label>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex-1 rounded-md bg-[#8f3d16] px-6 py-4 font-primary-bold text-base text-[#dee4ea]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  children: string;
}
