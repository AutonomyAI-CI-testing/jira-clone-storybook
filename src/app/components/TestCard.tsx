/**
 * TestCard Component
 * 
 * A self-contained dark-themed card UI for the "UI magician Agent" tool.
 * This component visually reproduces a Figma design with specific dark background colors
 * and orange-accented buttons.
 * 
 * Requirements:
 * - Render a dark card with "UI magician Agent" title
 * - Form inputs for Personal Access Token and Design URL
 * - Action buttons ("Awesome", "Prepare")
 */
const TestCard = () => {
  // Constants for theme colors to maintain consistency and ease of updates
  const colors = {
    background: '#1c1c1c',
    inputBg: '#212121',
    accent: '#b5451b', // Brown/orange used for buttons and primary accents
    textPrimary: '#ffffff',
    textSecondary: '#d1d5db',
    textMuted: '#9ca3af',
    border: '#4b5563',
    divider: '#374151',
  };

  return (
    <div
      id="testElem"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '375px',
        margin: '32px auto',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header Section */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>UI magician Agent</h1>
        <span style={{ color: colors.textMuted, fontSize: '20px', cursor: 'pointer' }} aria-label="Settings">⚙</span>
      </header>

      {/* Hero/Collapsible Section - "From entire frame to a singl..." */}
      <section style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', color: colors.accent, marginBottom: '8px' }}>
          <span style={{ marginRight: '8px', fontSize: '12px' }}>▲</span>
          <p style={{ margin: 0, fontSize: '14px' }}>From entire frame to a singl...</p>
        </div>
        <hr style={{ borderColor: colors.divider, margin: '16px 0' }} />
      </section>

      {/* Main Form Section */}
      <section style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', color: colors.textPrimary, marginBottom: '16px' }}>
          <span style={{ marginRight: '8px', fontSize: '12px' }}>▲</span>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Add New Design</h2>
        </div>

        <FormInput
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          colors={colors}
        />

        <FormInput
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          colors={colors}
        />

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <ActionButton label="Awesome" colors={colors} />
          <ActionButton label="Prepare" colors={colors} />
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: colors.textPrimary, margin: 0 }}>Recent Breakdowns</h2>
      </footer>
    </div>
  );
};

/**
 * Shared Input Component for Form Fields
 */
const FormInput = ({ id, label, placeholder, colors }: any) => (
  <div style={{ marginBottom: '16px' }}>
    <label
      htmlFor={id}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14px',
        fontWeight: '500',
        color: colors.textSecondary,
        marginBottom: '6px',
      }}
    >
      {label}
      <InfoIcon color={colors.textMuted} />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '8px',
        borderRadius: '6px',
        backgroundColor: colors.inputBg,
        border: `1px solid ${colors.border}`,
        color: colors.textMuted,
        fontSize: '14px',
        boxSizing: 'border-box',
        outline: 'none',
      }}
    />
  </div>
);

/**
 * Shared Button Component for Primary Actions
 */
const ActionButton = ({ label, colors }: any) => (
  <button
    style={{
      flex: 1,
      backgroundColor: colors.accent,
      color: colors.textPrimary,
      padding: '10px 16px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '15px',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    {label}
  </button>
);

/**
 * Info Icon Sub-component
 */
const InfoIcon = ({ color }: { color: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      fontSize: '11px',
      fontWeight: '600',
      borderRadius: '50%',
      border: `1px solid ${color}`,
      color: color,
    }}
  >
    i
  </span>
);

export default TestCard;
