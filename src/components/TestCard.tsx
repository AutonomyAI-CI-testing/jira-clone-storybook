export function TestCard() {
  return (
    <>
      <style>{`
        #testElem {
          background-color: #2a2a2a;
          color: #e8e0d8;
          font-family: sans-serif;
          padding: 24px 20px;
          min-height: 100vh;
          box-sizing: border-box;
        }
        #testElem .tc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        #testElem .tc-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #e8e0d8;
        }
        #testElem .tc-gear-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #a09080;
          padding: 0;
          line-height: 1;
        }
        #testElem .tc-subtitle {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #b07850;
          font-size: 0.92rem;
          margin-bottom: 36px;
        }
        #testElem .tc-section-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.15rem;
          font-weight: 700;
          color: #e8e0d8;
          margin-bottom: 24px;
        }
        #testElem .tc-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #c8bfb5;
          margin-bottom: 8px;
        }
        #testElem .tc-input {
          width: 100%;
          background-color: #1e1e1e;
          border: 1px solid #4a4038;
          border-radius: 6px;
          padding: 12px 14px;
          color: #7a6e68;
          font-size: 0.88rem;
          box-sizing: border-box;
          outline: none;
          margin-bottom: 18px;
        }
        #testElem .tc-input::placeholder {
          color: #6a5e58;
        }
        #testElem .tc-button-row {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          margin-bottom: 40px;
        }
        #testElem .tc-btn {
          flex: 1;
          background-color: #b5581a;
          color: #f0e8e0;
          border: none;
          border-radius: 10px;
          padding: 14px 20px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
        }
        #testElem .tc-btn:hover {
          background-color: #c96020;
        }
        #testElem .tc-recent-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: #e8e0d8;
          margin-top: 8px;
        }
        #testElem .tc-chevron {
          display: inline-flex;
          align-items: center;
          color: #c8bfb5;
        }
        #testElem .tc-info-icon {
          display: inline-flex;
          align-items: center;
          color: #9a8e88;
          cursor: default;
        }
      `}</style>

      <div id="testElem">
        {/* Header row */}
        <div className="tc-header">
          <span className="tc-title">UI magician Agent</span>
          <button className="tc-gear-btn" aria-label="Settings">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        {/* Subtitle row */}
        <div className="tc-subtitle">
          <span className="tc-chevron">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </span>
          <span>From entire frame to a singl...</span>
        </div>

        {/* Add New Design section */}
        <div className="tc-section-heading">
          <span className="tc-chevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </span>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="tc-label-row">
          <span>Personal Access Token</span>
          <span className="tc-info-icon" title="Info">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
        </div>
        <input
          className="tc-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />

        {/* Design URL */}
        <div className="tc-label-row">
          <span>Design URL</span>
          <span className="tc-info-icon" title="Info">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
        </div>
        <input
          className="tc-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />

        {/* Action buttons */}
        <div className="tc-button-row">
          <button className="tc-btn">Awesome</button>
          <button className="tc-btn">Prepare</button>
        </div>

        {/* Recent Breakdowns */}
        <div className="tc-recent-heading">Recent Breakdowns</div>
      </div>
    </>
  );
}

export default TestCard;
