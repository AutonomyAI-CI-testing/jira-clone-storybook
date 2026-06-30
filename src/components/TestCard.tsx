/**
 * Dark theme color constants matching the Figma design reference (node 2-2).
 * These are used via inline styles because the component sits outside the main Tailwind content path.
 */
const COLORS = {
  background: '#252525',
  inputBg: '#2e2e2e',
  inputBorder: '#444444',
  buttonBg: '#b5531a',
  buttonText: '#8c8078', // Muted tan text on orange-brown button
  headerTitle: '#b5b5b5',
  subtitle: '#8b9291',
  sectionHeading: '#b2b2b1',
  label: '#a4a4a3',
  placeholder: '#737470',
  footer: '#b0b0b0',
} as const;

/**
 * Reusable form field component with label and info icon.
 * Purely visual per requirements.
 */
const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-2 w-full">
    <div className="flex items-center gap-1">
      <label style={{ color: COLORS.label, fontSize: '11.5px', fontWeight: '600' }}>
        {label}
      </label>
      <svg width="12" height="12" viewBox="0 0 24 24" fill={COLORS.label} stroke={COLORS.label} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      style={{
        background: COLORS.inputBg,
        border: `1px solid ${COLORS.inputBorder}`,
        color: '#888',
        fontSize: '11.5px',
        padding: '8px 12px',
        borderRadius: '4px',
      }}
      className="w-full"
      readOnly // Visual only component
    />
  </div>
);

/**
 * Visual-only button component with specific Figma colors.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      background: COLORS.buttonBg,
      color: COLORS.buttonText,
      fontSize: '11.5px',
      fontWeight: '600',
      padding: '8px 24px',
      borderRadius: '4px',
    }}
    className="flex-1 text-center"
  >
    {children}
  </button>
);

/**
 * TestCard: A self-contained visual replication of a Figma-designed UI panel.
 * Root element has id="testElem" for test targeting as specified in functional requirements.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={{
      background: COLORS.background,
      padding: '20px',
      minWidth: '300px',
      fontFamily: 'Inter, sans-serif',
    }}
    className="flex flex-col gap-4"
  >
    {/* Header Section */}
    <div className="flex justify-between items-center w-full">
      <span style={{ color: COLORS.headerTitle, fontSize: '13.5px', fontWeight: '600' }}>
        UI magician Agent
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.headerTitle} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    {/* Subtitle Row */}
    <div className="flex items-center gap-1">
      <span style={{ color: COLORS.subtitle, fontSize: '11.5px', fontWeight: '600' }}>^</span>
      <span style={{ color: COLORS.subtitle, fontSize: '11.5px', fontWeight: '600' }}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-4" />

    {/* "Add New Design" Section Heading */}
    <div className="flex items-center gap-1 mt-4">
      <span style={{ color: COLORS.sectionHeading, fontSize: '13.5px', fontWeight: '600' }}>^</span>
      <span style={{ color: COLORS.sectionHeading, fontSize: '13.5px', fontWeight: '600' }}>
        Add New Design
      </span>
    </div>

    {/* Input Form Fields */}
    <FormField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
    <FormField label="Design URL" placeholder="https://www.figma.com/file/" />

    {/* Action Buttons */}
    <div className="flex gap-4 w-full mt-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <div className="h-8" />

    {/* Footer Heading */}
    <span style={{ color: COLORS.footer, fontSize: '13.5px', fontWeight: 'bold' }}>
      Recent Breakdowns
    </span>
  </div>
);

