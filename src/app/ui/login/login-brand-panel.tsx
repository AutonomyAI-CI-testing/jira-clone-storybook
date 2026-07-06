export const LoginBrandPanel = () => {
  return (
    <section className="login-brand-panel">
      {/* Wordmark */}
      <div className="login-wordmark">
        <span className="login-wordmark-glyph" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="#fff" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
            <circle cx="12" cy="12" r="3.4"/>
          </svg>
        </span>
        <span className="login-wordmark-name">
          Jira<span className="login-wordmark-accent">Clone</span>
        </span>
        <span className="login-wordmark-div" aria-hidden="true" />
        <span className="login-wordmark-product">Open Source Demo</span>
      </div>

      {/* Mid section */}
      <div className="login-brand-mid">
        <p className="login-eyebrow">Project Management · Built with Remix</p>
        <h1 className="login-headline">
          Your agile workflow,{" "}
          <span className="login-headline-grad">fully open source.</span>
        </h1>
        <p className="login-lede">
          Clone issues, manage sprints, and track progress across projects —
          all in a beautifully crafted Jira-inspired interface.
        </p>

        {/* Pipeline / status timeline */}
        <div className="login-pipeline" aria-hidden="true">
          <div className="login-pl-row">
            <span className="login-node login-node-blue" />
            <span className="login-pl-lab">
              <strong>Issue created</strong> — implement dark mode toggle
            </span>
            <span className="login-pl-time">Sprint 4</span>
          </div>
          <div className="login-pl-row">
            <span className="login-node login-node-amber" />
            <span className="login-pl-lab">
              <strong>In review</strong> — PR #312, awaiting approval
            </span>
            <span className="login-pl-time">2h ago</span>
          </div>
          <div className="login-pl-row">
            <span className="login-node login-node-green" />
            <span className="login-pl-lab">
              <strong>Merged &amp; deployed</strong> — v2.4.1 to production
            </span>
            <span className="login-pl-time">Done</span>
          </div>
        </div>
      </div>

      {/* Footer trust badges */}
      <div className="login-brand-foot">
        <span>Open Source</span>
        <span className="login-brand-dot" aria-hidden="true" />
        <span>TypeScript + Remix</span>
        <span className="login-brand-dot" aria-hidden="true" />
        <span>Tailwind CSS</span>
      </div>
    </section>
  );
};
