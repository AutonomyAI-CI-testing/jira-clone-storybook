import { HiOutlineCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-elevation-surface-raised p-5 rounded-lg w-full max-w-sm border border-border-bold shadow-overlay">
      {/* 1. Header row */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-font text-lg font-semibold">UI magician Agent</span>
        <HiOutlineCog className="text-icon text-xl cursor-pointer" />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-font-subtle" />
        <span className="text-font-subtle text-sm">From entire frame to a singl...</span>
      </div>

      {/* 4. Section heading row */}
      <div className="flex items-center gap-2 mb-4 mt-8">
        <HiChevronUp className="text-font-subtle" />
        <span className="text-font text-base font-semibold">Add New Design</span>
      </div>

      {/* 5. Label: "Personal Access Token" + ⓘ */}
      <div className="flex items-center justify-between text-font-subtle text-sm font-semibold mb-2">
        <div className="flex items-center gap-2">
          <span>Personal Access Token</span>
          <HiInformationCircle className="text-icon-subtle text-lg" />
        </div>
      </div>

      {/* 6. Input (figd_xxx) */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-background-input border border-border-input rounded px-3 py-2 text-sm placeholder:text-font-subtlest text-font focus:border-border-focused outline-none"
      />

      {/* 7. Label: "Design URL" + ⓘ */}
      <div className="flex items-center justify-between text-font-subtle text-sm font-semibold mb-2 mt-5">
        <div className="flex items-center gap-2">
          <span>Design URL</span>
          <HiInformationCircle className="text-icon-subtle text-lg" />
        </div>
      </div>

      {/* 8. Input (https://…) */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="w-full bg-background-input border border-border-input rounded px-3 py-2 text-sm placeholder:text-font-subtlest text-font focus:border-border-focused outline-none"
      />

      {/* 9. Button row */}
      <div className="flex gap-4 mt-8">
        <button className="flex-1 bg-background-danger-bold hover:bg-background-danger-bold-hovered text-font-inverse rounded py-2.5 text-sm font-bold transition-colors">Awesome</button>
        <button className="flex-1 bg-background-danger-bold hover:bg-background-danger-bold-hovered text-font-inverse rounded py-2.5 text-sm font-bold transition-colors">Prepare</button>
      </div>

      {/* 10. Section heading: Recent Breakdowns */}
      <div className="mt-10 text-font text-base font-semibold">Recent Breakdowns</div>
    </div>
  );
};
