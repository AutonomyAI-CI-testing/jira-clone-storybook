import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

interface FormFieldProps {
  label: string;
  placeholder: string;
  textSize: string;
}

/**
 * Renders a form field with label, info icon, and input display.
 * Used for both the Personal Access Token and Design URL fields.
 */
const FormField = ({ label, placeholder, textSize }: FormFieldProps) => (
  <div>
    <div className="mb-4 flex items-center justify-between">
      <label className="text-[15px] font-semibold text-[#A4A4A3]">
        {label}
      </label>
      <AiOutlineInfoCircle className="h-5 w-5 text-[#A4A4A3]" />
    </div>
    <div className="rounded border-2 border-[#A5ADAD] bg-[#272822] px-4 py-6">
      <span className={`${textSize} font-semibold text-[#737470]`}>
        {placeholder}
      </span>
    </div>
  </div>
);

/**
 * Renders a collapsible section header with chevron icon.
 * Used for expandable/collapsible sections in the card.
 */
const CollapsibleHeader = ({
  text,
  textSize,
}: {
  text: string;
  textSize: string;
}) => (
  <div className="flex items-center gap-2">
    <FiChevronUp className="h-4 w-4 text-[#8B9291]" />
    <span className={`${textSize} font-semibold text-[#8B9291]`}>{text}</span>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[460px] rounded-md bg-[#1C1D17] p-12">
      {/* Header with agent title and settings icon */}
      <header className="mb-14 flex items-center justify-between">
        <h1 className="text-[26px] font-semibold text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <button
          aria-label="Settings"
          className="text-[#B5B5B5] transition-colors hover:text-white"
        >
          <IoSettingsOutline className="h-6 w-6" />
        </button>
      </header>

      {/* Collapsible preview section - truncated text indicates expandable content */}
      <div className="mb-36">
        <CollapsibleHeader
          text="From entire frame to a singl..."
          textSize="text-[11.5px]"
        />
      </div>

      {/* Main form section for adding a new design */}
      <section>
        <div className="mb-12">
          <CollapsibleHeader text="Add New Design" textSize="text-[13.5px]" />
        </div>

        {/* Personal Access Token input field */}
        <div className="mb-12">
          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            textSize="text-[11.5px]"
          />
        </div>

        {/* Design URL input field */}
        <div className="mb-14">
          <FormField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            textSize="text-[10.5px]"
          />
        </div>

        {/* Primary action buttons */}
        <div className="mb-32 flex gap-6">
          <button className="flex-1 rounded bg-[#843A17] px-6 py-6 text-[17px] font-semibold text-[#8C8078] transition-opacity hover:opacity-90">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#843A17] px-6 py-6 text-[17px] font-semibold text-[#8C8078] transition-opacity hover:opacity-90">
            Prepare
          </button>
        </div>
      </section>

      {/* Recent activity section */}
      <section>
        <h3 className="text-[19px] font-semibold text-[#B0B0B0]">
          Recent Breakdowns
        </h3>
      </section>

      {/* Footer with copyright information */}
      <footer className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-400 text-sm">© AutonomyAI</p>
      </footer>
    </div>
  );
};
