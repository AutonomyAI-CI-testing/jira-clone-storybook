import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color constants matching the Figma design reference
const COLORS = {
  CARD_BG: "bg-[#2a2a2a]",
  INPUT_BG: "bg-[#1e1e1e]",
  INPUT_BORDER: "border-[#3a3a3a]",
  PRIMARY_CTA: "bg-[#b85c2a]",
  MUTED_ORANGE: "text-[#c07040]",
};

/**
 * A self-contained smoke test component that replicates the "UI Magician Agent" panel.
 * Used to validate design-to-code rendering fidelity.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={`${COLORS.CARD_BG} space-y-4 rounded-lg p-4 text-white`}
  >
    <Header />
    <DecorativeRow />

    <div className="space-y-4 pt-4">
      <SectionToggle title="Add New Design" />
      <DesignForm />
      <ActionButtons />
    </div>

    <div className="pt-4">
      <h3 className="text-md font-bold">Recent Breakdowns</h3>
    </div>
  </div>
);

const Header = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-bold">UI magician Agent</h2>
    <HiCog className="text-xl" />
  </div>
);

const DecorativeRow = () => (
  <div className="flex items-center space-x-2">
    <HiChevronUp className="text-gray-400" />
    <span className={COLORS.MUTED_ORANGE}>From entire frame to a singl...</span>
  </div>
);

const SectionToggle = ({ title }: { title: string }) => (
  <div className="flex items-center space-x-2">
    <HiChevronUp className="text-white" />
    <h3 className="text-md font-bold">{title}</h3>
  </div>
);

const DesignForm = () => (
  <div className="space-y-4">
    <FormField
      id="pat"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />
    <FormField
      id="designUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />
  </div>
);

const FormField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="text-gray-400 mb-1 flex items-center space-x-2 text-sm font-medium"
    >
      <span>{label}</span>
      <HiInformationCircle className="text-gray-400" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`w-full rounded p-2 ${COLORS.INPUT_BG} border ${COLORS.INPUT_BORDER} text-white`}
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex space-x-4 pt-2">
    <button
      className={`flex-1 rounded p-2 ${COLORS.PRIMARY_CTA} font-medium text-white`}
    >
      Awesome
    </button>
    <button
      className={`flex-1 rounded p-2 ${COLORS.PRIMARY_CTA} font-medium text-white`}
    >
      Prepare
    </button>
  </div>
);
