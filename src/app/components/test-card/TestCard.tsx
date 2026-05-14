import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * TestCard component displays a form for configuring a Figma design integration.
 * The component uses a dark theme with custom color palette and includes
 * collapsible sections, form inputs, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className="mx-auto w-full max-w-[520px] rounded-md p-8 text-white"
      style={{ backgroundColor: "#1e1b15" }}
    >
      <Header />
      <HintSection />
      <DesignFormSection />
      <RecentBreakdownsSection />
      <Footer />
    </div>
  );
};

/** Header row with agent title and settings icon */
const Header = (): JSX.Element => (
  <div className="mb-4 flex items-center justify-between">
    <h1 className="font-primary text-xl" style={{ color: "#d1cec6" }}>
      UI magician Agent
    </h1>
    <IoSettingsOutline className="h-6 w-6" style={{ color: "#d1cec6" }} />
  </div>
);

/** Collapsible hint section - currently collapsed showing truncated text */
const HintSection = (): JSX.Element => (
  <div className="mb-20 flex items-center gap-2 pl-1">
    <IoChevronUp className="h-4 w-4" style={{ color: "#8c8070" }} />
    <p className="font-primary text-sm" style={{ color: "#8c8070" }}>
      From entire frame to a singl...
    </p>
  </div>
);

/** Main form section for adding a new design */
const DesignFormSection = (): JSX.Element => (
  <>
    <SectionHeader title="Add New Design" />
    <FormField
      id="token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <FormField
      id="url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />
    <ActionButtons />
  </>
);

/** Section header with chevron icon and title */
const SectionHeader = ({ title }: { title: string }): JSX.Element => (
  <div className="mb-6 flex items-center gap-2">
    <IoChevronUp className="h-6 w-6" style={{ color: "#d1cec6" }} />
    <h2 className="font-primary-bold text-base" style={{ color: "#d1cec6" }}>
      {title}
    </h2>
  </div>
);

/** Form field with label, info icon, and input */
const FormField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mb-8">
    <div className="mb-2 flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-base" style={{ color: "#b8b4a8" }}>
        {label}
      </label>
      <IoInformationCircleOutline className="h-5 w-5" style={{ color: "#8c8070" }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      readOnly
      className="w-full rounded border bg-transparent px-4 py-4 font-primary text-sm outline-none"
      style={{
        borderColor: "#3a3528",
        color: "#8c8070",
      }}
    />
  </div>
);

/** Action buttons for form submission */
const ActionButtons = (): JSX.Element => (
  <div className="mb-20 flex gap-6">
    <ActionButton label="Awesome" />
    <ActionButton label="Prepare" />
  </div>
);

/** Individual action button with sienna background */
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    style={{ backgroundColor: "#a0522d" }}
    className="flex-1 rounded-sm px-6 py-4 font-primary text-sm hover:opacity-90"
  >
    <span style={{ color: "#d1cec6" }}>{label}</span>
  </button>
);

/** Recent breakdowns section header */
const RecentBreakdownsSection = (): JSX.Element => (
  <h2 className="mt-10 font-primary-bold text-base" style={{ color: "#d1cec6" }}>
    Recent Breakdowns
  </h2>
);

/** Footer with copyright information */
const Footer = (): JSX.Element => (
  <div className="border-t border-gray-300 pt-3 text-center">
    <p className="font-primary text-sm" style={{ color: "#8c8070" }}>
      © AutonomyAI
    </p>
  </div>
);
