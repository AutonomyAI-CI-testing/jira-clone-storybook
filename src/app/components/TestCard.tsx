/**
 * TestCard component
 * A self-contained UI panel that replicates a "UI magician Agent" design.
 * Uses Tailwind for styling with specific hex values to match the Figma reference.
 */
const TestCard = () => {
  return (
    <div
      id="testElem"
      className="mx-auto my-10 max-w-sm rounded-lg bg-[#2a2a2a] p-4 shadow-lg"
    >
      <Header />
      <Subtitle />
      <SectionToggle title="Add New Design" />

      <div className="mb-6 space-y-4">
        <LabeledInput
          id="accessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <LabeledInput
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mb-6 flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <RecentBreakdowns />
    </div>
  );
};

/**
 * Sub-components extracted for clarity and reuse
 */

const Header = () => (
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-lg font-bold text-white">UI magician Agent</h2>
    <span className="text-xl text-white" aria-hidden="true">
      ⚙
    </span>
  </div>
);

const Subtitle = () => (
  <div className="mb-6 flex items-center gap-2">
    <span className="text-[#c1703a]" aria-hidden="true">
      ^
    </span>
    <p className="text-sm text-[#c1703a]">From entire frame to a singl...</p>
  </div>
);

const SectionToggle = ({ title }: { title: string }) => (
  <div className="mb-4 flex items-center gap-2">
    <span className="text-white" aria-hidden="true">
      ^
    </span>
    <h3 className="text-md font-bold text-white">{title}</h3>
  </div>
);

interface LabeledInputProps {
  id: string;
  label: string;
  placeholder: string;
}

const LabeledInput = ({ id, label, placeholder }: LabeledInputProps) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 flex items-center gap-1 text-sm text-white"
    >
      {label}{" "}
      <span className="text-xs text-white" title="More information">
        ⓘ
      </span>
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="placeholder-gray-400 w-full rounded-md border border-[#555] bg-[#3a3a3a] p-2 text-white transition-shadow focus:outline-none focus:ring-1 focus:ring-[#c1703a]"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button className="flex-1 rounded-lg bg-[#a0522d] px-5 py-2 font-semibold text-white transition-all hover:bg-[#b0623d] active:scale-[0.98]">
    {label}
  </button>
);

const RecentBreakdowns = () => (
  <div>
    <h3 className="text-md font-bold text-white">Recent Breakdowns</h3>
  </div>
);

export default TestCard;
