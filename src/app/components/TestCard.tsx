import { HiChevronUp, HiCog, HiInformationCircle } from 'react-icons/hi';

// Design-specific colors extracted from Figma reference for the dark themed UI
const COLORS = {
  BACKGROUND: '#1e1e1e',
  INPUT_BACKGROUND: '#2a2a2a',
  INPUT_BORDER: '#444',
  MUTED_ORANGE: '#b8703a',
  PRIMARY_BUTTON: '#a0522d',
};

/**
 * TestCard is a smoke test component used to validate the UI rendering pipeline.
 * It provides a self-contained, dark-themed panel matching a specific design spec.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{ background: COLORS.BACKGROUND }}
      className="p-6 flex flex-col gap-4 max-w-xs rounded-lg text-white"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">UI magician Agent</span>
        <HiCog className="text-xl" aria-hidden="true" />
      </div>

      {/* Subtitle row - Uses persistent custom color for secondary branding */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="text-xl" aria-hidden="true" />
        <span style={{ color: COLORS.MUTED_ORANGE }}>From entire frame to a singl...</span>
      </div>

      {/* Vertical spacer - Creates visual separation between header and form */}
      <div className="py-2" />

      {/* Section header */}
      <div className="flex items-center gap-2 mt-4">
        <HiChevronUp className="text-xl" aria-hidden="true" />
        <span className="font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token input - Styled to match dark mode theme */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-sm">
          <span>Personal Access Token</span>
          <HiInformationCircle aria-hidden="true" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            background: COLORS.INPUT_BACKGROUND,
            borderColor: COLORS.INPUT_BORDER,
            borderWidth: '1px',
          }}
        />
      </div>

      {/* Design URL input */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-sm">
          <span>Design URL</span>
          <HiInformationCircle aria-hidden="true" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            background: COLORS.INPUT_BACKGROUND,
            borderColor: COLORS.INPUT_BORDER,
            borderWidth: '1px',
          }}
        />
      </div>

      {/* Action buttons - Side-by-side layout with equal weight */}
      <div className="flex gap-3 mt-2">
        <button
          className="flex-1 px-4 py-2 rounded-lg text-white font-medium"
          style={{ background: COLORS.PRIMARY_BUTTON }}
        >
          Awesome
        </button>
        <button
          className="flex-1 px-4 py-2 rounded-lg text-white font-medium"
          style={{ background: COLORS.PRIMARY_BUTTON }}
        >
          Prepare
        </button>
      </div>

      {/* Footer label */}
      <div className="py-2">
        <span className="font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
