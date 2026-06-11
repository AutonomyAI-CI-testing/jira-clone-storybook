export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#272822] px-6 pt-6 pb-8 w-[320px]">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] font-bold text-lg">UI magician Agent</span>
        <span className="text-[#b5b5b5] text-2xl">⚙</span>
      </div>

      {/* Subtitle Row - Small chevron and descriptive text */}
      <div className="flex items-center gap-1 mt-3 mb-10">
        <span className="text-[#8b9291] text-base">&#8963;</span>
        <span className="text-[#8b9291] text-base">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[#b2b2b1] text-lg font-bold">&#8963;</span>
        <span className="text-[#b2b2b1] font-bold text-lg">Add New Design</span>
      </div>

      {/* Form Block */}
      <div className="flex flex-col gap-5">
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderColor="border-[#a5adad]"
        />
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderColor="border-[#929291]"
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-4 mt-7">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer */}
      <div className="mt-12">
        <span className="text-[#b0b0b0] font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
};

/**
 * Reusable input field with label and info icon.
 */
const InputField = ({
  label,
  placeholder,
  borderColor,
}: {
  label: string;
  placeholder: string;
  borderColor: string;
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label className="text-[#a4a4a3] text-base font-semibold">{label}</label>
      <span className="text-[#a4a4a3] text-base">ⓘ</span>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[#272822] border ${borderColor} text-[#737470] text-base px-3 py-3 rounded-sm outline-none`}
    />
  </div>
);

/**
 * Common button style for form actions.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#843a17] text-[#e8d5c8] font-semibold text-base rounded px-6 py-3">
    {label}
  </button>
);

