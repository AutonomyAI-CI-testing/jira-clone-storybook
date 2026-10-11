import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test panel reproduced from a Figma frame ("UI magician Agent").
 *
 * The design's extracted style guide and its exported icon assets were not
 * available in this workspace, so every colour, spacing and type value below is
 * an approximation read from the frame image, and the icons are library
 * stand-ins rather than the design's own artwork.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-6 py-6 text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold">UI magician Agent</h1>
      <FiSettings aria-hidden className="shrink-0 text-xl" />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0 text-lg" />
      <span className="truncate text-sm text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <FiChevronUp aria-hidden className="shrink-0 text-xl" />
      <h2 className="text-base font-semibold">Add New Design</h2>
    </div>

    <div className="mt-7">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-9">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-16 text-base font-semibold">Recent Breakdowns</h2>
  </div>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-[#c9c9c9]">{label}</span>
      <FiInfo aria-hidden className="shrink-0 text-base text-[#c9c9c9]" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 w-full border border-[#6e6e6e] bg-[#262626] px-4 py-3 text-sm text-[#8a8a8a] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="w-40 rounded-lg bg-[#8f3d1b] py-3 text-base font-medium text-[#d9b7a6]"
  >
    {label}
  </button>
);
