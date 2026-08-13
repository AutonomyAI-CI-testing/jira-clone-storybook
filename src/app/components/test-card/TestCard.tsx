const s = {
  root: {
    width: "254px",
    backgroundColor: "#2b2b27",
    display: "flex",
    flexDirection: "column" as const,
    padding: "20px",
    gap: "16px",
    fontFamily: "Inter, sans-serif",
  },
  topSection: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#b5b5b5",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#8b9291",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  },
  section: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "14px",
    marginTop: "8px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#b2b2b1",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  },
  field: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#a4a4a3",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  },
  labelUrl: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#a3a3a2",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  },
  inputToken: {
    backgroundColor: "#272822",
    border: "1px solid #a5adad",
    padding: "10px 12px",
    color: "#737470",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  },
  inputUrl: {
    backgroundColor: "#272822",
    border: "2px solid #929291",
    padding: "10px 12px",
    color: "#71726e",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  },
  buttonsRow: {
    display: "flex",
    gap: "12px",
  },
  button: {
    flex: 1,
    backgroundColor: "#843a17",
    borderRadius: "4px",
    border: "none",
    color: "#8c8078",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
    padding: "10px 0",
    cursor: "pointer",
  },
  recentBreakdowns: {
    color: "#b0b0b0",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
    marginTop: "8px",
  },
};

export const TestCard = () => {
  return (
    <div id="testElem" style={s.root}>
      {/* Top bar */}
      <div style={s.topSection}>
        <div style={s.topBar}>
          <span style={s.title}>UI magician Agent</span>
          {/* Gear icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2"/>
            <path
              d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.2 3.2l.7.7M12.1 12.1l.7.7M12.8 3.2l-.7.7M3.9 12.1l-.7.7"
              stroke="#b5b5b5"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <circle cx="8" cy="8" r="4.5" stroke="#b5b5b5" strokeWidth="1.2" strokeDasharray="2 2.4"/>
          </svg>
        </div>

        {/* Subtitle row */}
        <div style={s.subtitle}>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>From entire frame to a singl...</span>
        </div>
      </div>

      {/* Add New Design section */}
      <div style={s.section}>
        {/* Section header */}
        <div style={s.sectionHeader}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6L6 1L11 6" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div style={s.field}>
          <div style={s.label}>
            <span>Personal Access Token</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1"/>
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a4a4a3" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="700">i</text>
            </svg>
          </div>
          <div style={s.inputToken}>
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div style={s.field}>
          <div style={s.labelUrl}>
            <span>Design URL</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1"/>
              <text x="7.5" y="11.2" textAnchor="middle" fill="#a3a3a2" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="700">i</text>
            </svg>
          </div>
          <div style={s.inputUrl}>
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Buttons */}
        <div style={s.buttonsRow}>
          <button style={s.button}>Awesome</button>
          <button style={s.button}>Prepare</button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <span style={s.recentBreakdowns}>Recent Breakdowns</span>
    </div>
  );
};
