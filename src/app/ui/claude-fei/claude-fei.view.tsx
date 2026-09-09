export function ClaudeFeiView() {
  return (
    <div className="cf-root">
      <style>{CSS}</style>

      {/* Design background — the provided login design rendered as the page backdrop */}
      <main className="shell" aria-hidden="true">
        <section className="brand">
          <div className="wordmark">
            <span className="glyph">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span>
              Autonomy<span className="ai">AI</span>
            </span>
            <span className="div" />
            <span className="product">On-Call Agent</span>
          </div>

          <div className="brand-mid">
            <p className="eyebrow">Autonomous incident response</p>
            <h1>
              Your on-call engineer that <span className="grad">never sleeps.</span>
            </h1>
            <p className="lede">
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </p>

            <div className="pipeline">
              <div className="pl-row">
                <span className="node n-blue"></span>
                <span className="lab">
                  <b>Alert received</b> — latency spike, checkout-svc
                </span>
                <span className="t">00:00</span>
              </div>
              <div className="pl-row">
                <span className="node n-amber"></span>
                <span className="lab">
                  <b>Triaged &amp; root-caused</b> — connection pool exhausted
                </span>
                <span className="t">00:02</span>
              </div>
              <div className="pl-row">
                <span className="node n-ok"></span>
                <span className="lab">
                  <b>Fix merged</b> — PR #1408, verified in staging
                </span>
                <span className="t">00:09</span>
              </div>
            </div>
          </div>

          <div className="brand-foot">
            <span>SOC 2 Type II</span>
            <span className="dot"></span>
            <span>Runs in your infra</span>
            <span className="dot"></span>
            <span>150+ teams on-call</span>
          </div>
        </section>

        <section className="auth">
          <div className="card">
            <div className="auth-head">
              <p className="ey">Sign in</p>
              <h2>Welcome back</h2>
              <p>Pick up where the agent left off.</p>
            </div>

            <div className="sso">
              <button type="button">Continue with GitHub</button>
              <button type="button">Continue with Google</button>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <form>
              <div className="field">
                <label htmlFor="cf-email">Work email</label>
                <div className="input-wrap">
                  <input id="cf-email" type="email" placeholder="you@company.com" />
                </div>
              </div>
              <div className="field">
                <div className="lbl-row">
                  <label htmlFor="cf-password">Password</label>
                  <a href="#">Forgot password?</a>
                </div>
                <div className="input-wrap">
                  <input id="cf-password" type="password" placeholder="••••••••••••" />
                </div>
              </div>
              <button type="submit" className="submit">
                <span className="label">Sign in</span>
              </button>
            </form>

            <p className="footnote">
              New to the On-Call Agent? <a href="#">Request access</a>
            </p>
          </div>
        </section>
      </main>

      {/* Foreground headline */}
      <div className="cf-overlay">
        <span className="cf-title">Claude Fei</span>
      </div>
    </div>
  );
}

const CSS = `
  .cf-root { position: relative; min-height: 100vh; font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif; }
  .cf-root .shell { display: grid; grid-template-columns: 1.05fr .95fr; min-height: 100vh; background: #100f13; color: #eceaf0; }
  @media (max-width: 920px) { .cf-root .shell { grid-template-columns: 1fr; } .cf-root .brand { display: none; } }

  .cf-root .brand {
    position: relative; overflow: hidden;
    background: #16151b; border-right: 1px solid #33323c;
    padding: clamp(36px, 4.5vw, 64px); display: flex; flex-direction: column;
  }
  .cf-root .brand::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
      radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
  }
  .cf-root .brand > * { position: relative; z-index: 1; }

  .cf-root .wordmark { display: flex; align-items: center; gap: 11px; font-weight: 800; font-size: 19px; letter-spacing: -.01em; }
  .cf-root .wordmark .glyph {
    width: 30px; height: 30px; border-radius: 8px; flex: none;
    background: linear-gradient(150deg, #f25730, #ff8a5f);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
  }
  .cf-root .wordmark .glyph svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .cf-root .wordmark .ai { color: #f25730; }
  .cf-root .wordmark .div { width: 1px; height: 18px; background: #33323c; margin: 0 3px; }
  .cf-root .wordmark .product { font-weight: 500; font-size: 14px; color: #a5a3ad; }

  .cf-root .brand-mid { margin-top: auto; margin-bottom: auto; padding: 48px 0; max-width: 480px; }
  .cf-root .eyebrow { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-weight: 500; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: #f25730; margin: 0 0 22px; }
  .cf-root .brand h1 { font-weight: 800; font-size: clamp(32px, 3.6vw, 48px); line-height: 1.05; letter-spacing: -.02em; margin: 0; color: #eceaf0; }
  .cf-root .brand h1 .grad { background: linear-gradient(95deg, #f25730, #ff8a5f); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .cf-root .brand p.lede { font-size: 18px; line-height: 1.55; color: #a5a3ad; margin: 22px 0 0; max-width: 420px; }

  .cf-root .pipeline { margin-top: 40px; display: flex; flex-direction: column; }
  .cf-root .pl-row { display: flex; align-items: center; gap: 14px; position: relative; padding: 11px 0; }
  .cf-root .pl-row .node { width: 11px; height: 11px; border-radius: 50%; flex: none; position: relative; z-index: 1; }
  .cf-root .pl-row:not(:last-child)::before { content: ""; position: absolute; left: 5px; top: 22px; bottom: -1px; width: 1px; background: #33323c; }
  .cf-root .pl-row .lab { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12.5px; letter-spacing: .02em; color: #a5a3ad; }
  .cf-root .pl-row .lab b { color: #eceaf0; font-weight: 600; font-family: Inter, system-ui, sans-serif; }
  .cf-root .pl-row .t { margin-left: auto; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; color: #6b6a75; }
  .cf-root .n-blue { background: #9fd2ed; box-shadow: 0 0 0 4px rgba(159,210,237,.12); }
  .cf-root .n-amber { background: #e8a13c; box-shadow: 0 0 0 4px rgba(232,161,60,.12); }
  .cf-root .n-ok { background: #4fb477; box-shadow: 0 0 0 4px rgba(79,180,119,.14); }

  .cf-root .brand-foot { display: flex; align-items: center; gap: 18px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; letter-spacing: .04em; color: #6b6a75; }
  .cf-root .brand-foot .dot { width: 4px; height: 4px; border-radius: 50%; background: #4a4954; }

  .cf-root .auth { display: flex; align-items: center; justify-content: center; padding: clamp(28px, 5vw, 64px); background: #16151b; }
  .cf-root .card { width: 100%; max-width: 392px; }
  .cf-root .auth-head { margin-bottom: 30px; }
  .cf-root .auth-head .ey { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-weight: 500; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: #6b6a75; margin: 0 0 14px; }
  .cf-root .auth-head h2 { font-weight: 700; font-size: 30px; line-height: 1.1; letter-spacing: -.02em; margin: 0; color: #eceaf0; }
  .cf-root .auth-head p { font-size: 15px; line-height: 1.5; color: #a5a3ad; margin: 9px 0 0; }

  .cf-root .sso { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
  .cf-root .sso button {
    width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
    font-weight: 600; font-size: 14px; background: #23222b; color: #eceaf0;
    border: 1px solid #33323c; border-radius: 8px; padding: 12px 16px; cursor: pointer;
  }
  .cf-root .divider { display: flex; align-items: center; gap: 14px; margin: 0 0 22px; color: #6b6a75; }
  .cf-root .divider::before, .cf-root .divider::after { content: ""; height: 1px; flex: 1; background: #33323c; }
  .cf-root .divider span { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }

  .cf-root form { display: flex; flex-direction: column; gap: 16px; }
  .cf-root .field label { display: block; font-size: 13px; font-weight: 500; color: #a5a3ad; margin-bottom: 7px; }
  .cf-root .field input {
    width: 100%; font-size: 15px; color: #eceaf0; background: #1d1c24;
    border: 1px solid #33323c; border-radius: 8px; padding: 12px 14px; outline: none;
  }
  .cf-root .field input::placeholder { color: #6b6a75; }
  .cf-root .lbl-row { display: flex; align-items: center; justify-content: space-between; }
  .cf-root .lbl-row a { font-size: 12.5px; color: #f25730; text-decoration: none; }
  .cf-root .submit {
    margin-top: 4px; width: 100%; font-weight: 600; font-size: 15px;
    background: #f25730; color: #fff; border: 0; border-radius: 8px; padding: 13px 16px; cursor: pointer;
  }
  .cf-root .footnote { margin-top: 26px; text-align: center; font-size: 13.5px; color: #a5a3ad; }
  .cf-root .footnote a { color: #f25730; text-decoration: none; font-weight: 500; }

  /* Foreground overlay — "Claude Fei" in red */
  .cf-overlay {
    position: fixed; inset: 0; z-index: 10;
    display: flex; align-items: center; justify-content: center;
    pointer-events: none; background: rgba(16, 15, 19, 0.45);
    padding: 0 4vw;
  }
  .cf-title {
    color: red;
    font-weight: 800;
    font-size: clamp(64px, 11.5vw, 168px);
    white-space: nowrap;
    letter-spacing: -.02em;
    text-shadow: 0 4px 40px rgba(0, 0, 0, 0.6);
  }
`;
