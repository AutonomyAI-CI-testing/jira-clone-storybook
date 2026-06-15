import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

const COLORS = {
  background: "#161613",
  inputBackground: "#242421",
  inputBorder: "#444444",
  border: "#333333",
  textPrimary: "#babab2",
  textSecondary: "#72726b",
  buttonBackground: "#8a4022",
  buttonText: "#111111",
};

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormField = ({ id, label, placeholder }: FormFieldProps) => (
  <div className="mb-4 last:mb-6">
    <label
      htmlFor={id}
      className="text-sm flex items-center mb-2"
      style={{ color: COLORS.textSecondary }}
    >
      {label}
      <AiOutlineInfoCircle
        className="ml-1"
        style={{ color: COLORS.textPrimary }}
      />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-none border outline-none"
      style={{
        backgroundColor: COLORS.inputBackground,
        borderColor: COLORS.inputBorder,
        color: COLORS.textPrimary,
      }}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] p-4 rounded-none"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h2>
        <AiOutlineSetting
          className="text-xl tooltip"
          style={{ color: COLORS.textPrimary }}
        />
      </div>

      {/* Subtitle Row - Navigation context */}
      <div className="flex items-center mb-4">
        <FiChevronUp
          className="text-lg mr-2"
          style={{ color: COLORS.textSecondary }}
        />
        <span className="text-sm" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div
        className="flex items-center mb-4 pt-4 border-t"
        style={{ borderColor: COLORS.border }}
      >
        <FiChevronUp
          className="text-lg mr-2"
          style={{ color: COLORS.textPrimary }}
        />
        <h3 className="text-md font-bold" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </h3>
      </div>

      {/* Form Fields */}
      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          className="flex-1 p-2 rounded-md font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 p-2 rounded-md font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* List footer */}
      <div>
        <h3
          className="text-md font-semibold"
          style={{ color: COLORS.textPrimary }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
