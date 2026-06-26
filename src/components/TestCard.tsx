
/**
 * TestCard component replicates a "UI magician Agent" panel.
 * Designed to match Figma specs with specific dark theme colors and layout.
 * Used for UI verification and testing.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col space-y-4 bg-[#2a2a2a] p-4 text-white"
    >
      <Header />
      <CollapsibleRow label="From entire frame to a singl..." />

      <div className="h-4" aria-hidden="true" />

      <section className="flex flex-col space-y-4">
        <CollapsibleRow label="Add New Design" isSectionHeader />

        <FormField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          color="#a4a4a3"
          textColor="#737470"
        />

        <FormField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          color="#a3a3a2"
          textColor="#71726e"
        />

        <div className="flex justify-between space-x-4">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </section>

      <footer className="pt-4">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#b5b5b5]" aria-hidden="true">
        ⚙
      </span>
    </div>
  );
}

function CollapsibleRow({
  label,
  isSectionHeader = false,
}: {
  label: string;
  isSectionHeader?: boolean;
}) {
  // Use specific hex codes from design for hierarchical contrast
  const colorClass = isSectionHeader ? "text-[#b2b2b1]" : "text-[#8b9291]";

  return (
    <div className="flex items-center space-x-2">
      <span className={`text-[11.5px] font-semibold ${colorClass}`}>^</span>
      <span
        className={`${
          isSectionHeader ? "text-[13.5px]" : "text-[11.5px]"
        } font-semibold ${colorClass}`}
      >
        {label}
      </span>
    </div>
  );
}

function FormField({
  id,
  label,
  placeholder,
  color,
  textColor,
}: {
  id: string;
  label: string;
  placeholder: string;
  color: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <label
          htmlFor={id}
          className="text-[11.5px] font-semibold"
          style={{ color }}
        >
          {label}
        </label>
        <span style={{ color }} aria-hidden="true">
          ⓘ
        </span>
      </div>
      <input
        id={id}
        type="text"
        readOnly
        placeholder={placeholder}
        className="rounded border border-gray-600 bg-[#2a2a2a] p-2 text-[11.5px] font-semibold placeholder:opacity-100"
        style={{ color: textColor }}
      />
    </div>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <button className="flex-1 rounded bg-[#b5522a] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]">
      {label}
    </button>
  );
}
