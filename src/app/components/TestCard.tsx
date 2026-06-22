
/**
 * A hardcoded smoke-test component that visually approximates a Figma UI design.
 * Used to verify Tailwind CSS styling and component rendering.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#2a2a2a] p-5 font-sans text-white"
    >
      <Header />
      <Subtitle />

      <section className="mb-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm font-semibold text-[#b2b2b1]">˄</span>
          <span className="text-sm font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <InputGroup
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputGroup
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mb-5"
        />

        <div className="flex gap-3">
          <Button label="Awesome" />
          <Button label="Prepare" />
        </div>
      </section>

      <footer>
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="mb-3 flex items-center justify-between">
      <span className="text-sm font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-base text-[#b5b5b5]">⚙</span>
    </header>
  );
}

function Subtitle() {
  return (
    <div className="mb-6 flex items-center gap-2">
      <span className="text-xs font-semibold text-[#8b9291]">˄</span>
      <span className="text-xs font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>
  );
}

interface InputGroupProps {
  label: string;
  placeholder: string;
  className?: string;
}

function InputGroup({ label, placeholder, className = "mb-4" }: InputGroupProps) {
  return (
    <div className={className}>
      <label className="mb-1 flex items-center gap-1 text-xs font-medium text-[#a3a3a2]">
        {label}
        <span className="text-[#a3a3a2]">ℹ</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border border-[#555555] bg-[#333333] p-2 text-xs text-white placeholder-[#71726e]"
        readOnly // Visual only for smoke test
      />
    </div>
  );
}

function Button({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="rounded-lg bg-[#b85c2a] px-5 py-2 text-xs font-semibold text-[#e8ddd8]"
    >
      {label}
    </button>
  );
}
