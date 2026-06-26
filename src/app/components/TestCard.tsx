import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Design constants from Figma
const COLORS = {
  bgRoot: "#2b2b2b",
  bgInput: "#333333",
  bgButton: "#7a4a30",
  textTitle: "#b5b5b5",
  textSubtitle: "#8b9291",
  textHeading: "#b2b2b1",
  textLabel: "#a4a4a3",
  textPlaceholder: "#737470", // Shared approximate placeholder color
  textButton: "#8c8078",
};

/**
 * Reusable input field component for the smoke test card
 * Matches the dark themed Figma design
 */
const InputField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mb-4 last:mb-6">
    <div className="mb-2 flex items-center">
      <label htmlFor={id} className="mr-2 text-sm text-[#a4a4a3]">
        {label}
      </label>
      <FiInfo className="text-sm text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md bg-[#333333] p-2 text-[#737470] placeholder-[#737470] outline-none"
    />
  </div>
);

/**
 * TestCard component
 * A smoke test component that visually approximates a "UI magician Agent" panel.
 * Used to verify the Tailwind and icon integration.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={{ backgroundColor: COLORS.bgRoot }}
    className="font-sans w-[254px] p-4 text-white"
  >
    {/* Header row - Title and Settings */}
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings className="text-lg text-[#b5b5b5]" />
    </div>

    {/* Section: Status/Subtitle with fold icon */}
    <div className="mb-6 flex items-center">
      <FiChevronUp className="mr-2 text-[#8b9291]" />
      <p className="text-sm text-[#8b9291]">From entire frame to a singl...</p>
    </div>

    {/* Section: Add New Design */}
    <div className="mb-4 flex items-center">
      <FiChevronUp className="mr-2 text-[#b2b2b1]" />
      <h3 className="text-xl font-semibold text-[#b2b2b1]">Add New Design</h3>
    </div>

    <InputField
      id="accessToken"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <InputField
      id="designURL"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    {/* Action buttons */}
    <div className="mb-6 flex justify-between space-x-2">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          className="flex-1 rounded-lg bg-[#7a4a30] px-4 py-2 font-medium text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    {/* Section: Recent Breakdowns */}
    <div>
      <h3 className="text-xl font-semibold text-[#b2b2b1]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);
