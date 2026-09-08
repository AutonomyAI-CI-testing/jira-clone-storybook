import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="login-view">
      <style>{loginStyles}</style>
      <main className="shell">
        {/* ===================== BRAND PANEL ===================== */}
        <section className="brand" data-screen-label="Login · brand panel">
          <div className="wordmark">
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span>
              Autonomy<span className="ai">AI</span>
            </span>
            <span className="div" aria-hidden="true"></span>
            <span className="product">On-Call Agent</span>
          </div>

          <div className="brand-mid">
            <p className="eyebrow">Autonomous incident response</p>
            <h1>
              <span className="red">Your</span> on-call engineer that{" "}
              <span className="grad">never sleeps.</span>
            </h1>
            <p className="lede">
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </p>

            <div className="pipeline" aria-hidden="true">
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
            <span className="dot" aria-hidden="true"></span>
            <span>Runs in your infra</span>
            <span className="dot" aria-hidden="true"></span>
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* ===================== AUTH PANEL ===================== */}
        <section className="auth" data-screen-label="Login · form">
          <div className="card">
            <div className="wordmark mobile-mark">
              <span className="glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                  <circle cx="12" cy="12" r="3.4" />
                </svg>
              </span>
              <span>
                Autonomy<span className="ai">AI</span>
              </span>
            </div>

            <div className="auth-head">
              <p className="ey">Sign in</p>
              <h2>Welcome back</h2>
              <p>Pick up where the agent left off.</p>
            </div>

            <div className="sso">
              <button type="button" aria-label="Continue with GitHub">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                </svg>
                Continue with GitHub
              </button>
              <button type="button" aria-label="Continue with Google">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <Form method="post">
              <div className="field">
                <label id="user-select-label">Sign in as</label>
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    className="login-select-trigger"
                    aria-label="Select login user"
                  >
                    <span className="trigger-user">
                      <UserAvatar {...selectedValue} />
                      <Select.Value />
                    </span>
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {users.map((user) => (
                        <Select.Item key={user.id} value={user.id}>
                          <Select.ItemIndicator />
                          <UserAvatar {...user} />
                          <Select.ItemText>{user.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                      <Select.Separator />
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select.Root>
              </div>

              <label className="remember">
                <input type="checkbox" id="remember" />
                <span className="box" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                </span>
                Keep me signed in
              </label>

              <button
                type="submit"
                name="_action"
                value="setUser"
                aria-label="Login"
                className={isSubmitting ? "submit loading" : "submit"}
                disabled={isSubmitting}
              >
                <span className="spinner" aria-hidden="true"></span>
                <span className="label">
                  {isSubmitting ? "Signing in…" : "Sign in"}
                </span>
              </button>
            </Form>

            <p className="footnote">
              New to the On-Call Agent? <a href="#">Request access</a>
            </p>

            <div className="secure">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface Props {
  users: User[];
}

/*
 * Styles for the attached login design. The design references a shared
 * token stylesheet (assets/colors_and_type.css) that was not included in
 * the upload, so its tokens are reconstructed here, scoped under
 * `.login-view` so they never leak into the project's semantic theme.
 */
const loginStyles = `
  .login-view{
    --ink-950:#131110; --ink-900:#1a1715; --ink-700:#2b2724; --ink-600:#35302b;
    --ink-500:#231f1c; --ink-400:#3d3833; --ink-300:#5a534c;
    --fg:#f4f1ed; --fg-muted:#b3aca2; --fg-faint:#8b847a;
    --aai-orange:#f25730; --aai-orange-peach:#ff9a72;
    --aai-orange-bright:#ff6b40; --aai-orange-deep:#d1461f;
    --ring:rgba(242,87,48,.28);
    --glow-orange:0 10px 30px rgba(242,87,48,.25);
    --aai-blue:#9fd2ed; --warn:#e8a13c; --ok:#4fb477; --err:#e5534b;
    --font-sans:"CircularStdMedium",sans-serif;
    --font-display:"CircularStdBold",sans-serif;
    --font-mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
    --ease-out:cubic-bezier(.16,1,.3,1);

    min-height:100vh;
    background:var(--ink-950);
    color:var(--fg);
    font-family:var(--font-sans);
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }
  .login-view *, .login-view *::before, .login-view *::after{box-sizing:border-box}

  /* film grain overlay — the signature brand texture */
  .login-view::before{
    content:"";
    position:fixed;inset:0;z-index:9999;pointer-events:none;
    opacity:.045;mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .login-view .shell{display:grid;grid-template-columns:1.05fr .95fr;min-height:100vh;margin:0}
  @media (max-width:920px){
    .login-view .shell{grid-template-columns:1fr}
    .login-view .brand{display:none}
  }

  /* ---------------- left / brand panel ---------------- */
  .login-view .brand{
    position:relative;overflow:hidden;
    background:var(--ink-900);
    border-right:1px solid var(--ink-400);
    padding:clamp(36px,4.5vw,64px);
    display:flex;flex-direction:column;
  }
  .login-view .brand::after{
    content:"";position:absolute;inset:0;pointer-events:none;
    background:
      radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
      radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
  }
  .login-view .brand > *{position:relative;z-index:1}

  .login-view .wordmark{display:flex;align-items:center;gap:11px;font-family:var(--font-display);font-weight:800;font-size:19px;letter-spacing:-.01em}
  .login-view .wordmark .glyph{
    width:30px;height:30px;border-radius:8px;flex:none;
    background:linear-gradient(150deg,var(--aai-orange),var(--aai-orange-peach));
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
  }
  .login-view .wordmark .glyph svg{width:16px;height:16px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
  .login-view .wordmark .ai{color:var(--aai-orange)}
  .login-view .wordmark .div{width:1px;height:18px;background:var(--ink-400);margin:0 3px}
  .login-view .wordmark .product{font-weight:500;font-size:14px;color:var(--fg-muted);letter-spacing:0}

  .login-view .brand-mid{margin-top:auto;margin-bottom:auto;padding:48px 0;max-width:480px}
  .login-view .eyebrow{font-family:var(--font-mono);font-weight:500;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--aai-orange);margin:0 0 22px}
  .login-view .brand h1{
    font-family:var(--font-display);font-weight:800;
    font-size:clamp(32px,3.6vw,48px);line-height:1.05;letter-spacing:-.02em;
    margin:0;color:var(--fg);text-wrap:balance;
  }
  .login-view .brand h1 .red{color:var(--err)}
  .login-view .brand h1 .grad{
    background:linear-gradient(95deg,var(--aai-orange),var(--aai-orange-peach));
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .login-view .brand p.lede{font-size:18px;line-height:1.55;color:var(--fg-muted);margin:22px 0 0;max-width:420px}

  .login-view .pipeline{margin-top:40px;display:flex;flex-direction:column;gap:0}
  .login-view .pl-row{display:flex;align-items:center;gap:14px;position:relative;padding:11px 0}
  .login-view .pl-row .node{width:11px;height:11px;border-radius:50%;flex:none;position:relative;z-index:1}
  .login-view .pl-row:not(:last-child)::before{content:"";position:absolute;left:5px;top:22px;bottom:-1px;width:1px;background:var(--ink-400)}
  .login-view .pl-row .lab{font-family:var(--font-mono);font-size:12.5px;letter-spacing:.02em;color:var(--fg-muted)}
  .login-view .pl-row .lab b{color:var(--fg);font-weight:600;font-family:var(--font-sans)}
  .login-view .pl-row .t{margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--fg-faint)}
  .login-view .n-blue{background:var(--aai-blue);box-shadow:0 0 0 4px rgba(159,210,237,.12)}
  .login-view .n-amber{background:var(--warn);box-shadow:0 0 0 4px rgba(232,161,60,.12)}
  .login-view .n-ok{background:var(--ok);box-shadow:0 0 0 4px rgba(79,180,119,.14)}

  .login-view .brand-foot{display:flex;align-items:center;gap:18px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--fg-faint)}
  .login-view .brand-foot .dot{width:4px;height:4px;border-radius:50%;background:var(--ink-300)}

  /* ---------------- right / form panel ---------------- */
  .login-view .auth{display:flex;align-items:center;justify-content:center;padding:clamp(28px,5vw,64px);background:var(--ink-900)}
  .login-view .card{width:100%;max-width:392px}

  .login-view .auth-head{margin-bottom:30px}
  .login-view .auth-head .ey{font-family:var(--font-mono);font-weight:500;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--fg-faint);margin:0 0 14px}
  .login-view .auth-head h2{font-family:var(--font-display);font-weight:700;font-size:30px;line-height:1.1;letter-spacing:-.02em;margin:0;color:var(--fg)}
  .login-view .auth-head p{font-size:15px;line-height:1.5;color:var(--fg-muted);margin:9px 0 0}

  .login-view .sso{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
  .login-view .sso button{
    width:100%;display:flex;align-items:center;justify-content:center;gap:10px;
    font-family:var(--font-sans);font-weight:600;font-size:14px;
    background:var(--ink-700);color:var(--fg);
    border:1px solid var(--ink-400);border-radius:8px;padding:12px 16px;cursor:pointer;
    transition:border-color .18s var(--ease-out),background .18s var(--ease-out);
  }
  .login-view .sso button:hover{border-color:var(--ink-300);background:var(--ink-600)}
  .login-view .sso button svg{width:17px;height:17px;flex:none}

  .login-view .divider{display:flex;align-items:center;gap:14px;margin:0 0 22px;color:var(--fg-faint)}
  .login-view .divider::before,.login-view .divider::after{content:"";height:1px;flex:1;background:var(--ink-400)}
  .login-view .divider span{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase}

  .login-view form{display:flex;flex-direction:column;gap:16px;margin:0}
  .login-view .field label{display:block;font-size:13px;font-weight:500;color:var(--fg-muted);margin-bottom:7px}

  /* the working sign-in control: user picker styled as the design's input */
  .login-view .login-select-trigger{
    width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;
    font-family:var(--font-sans);font-size:15px;font-weight:500;color:var(--fg);
    background:var(--ink-500);border:1px solid var(--ink-400);border-radius:8px;
    padding:9px 14px;cursor:pointer;outline:none;
    transition:border-color .15s var(--ease-out),box-shadow .15s var(--ease-out);
  }
  .login-view .login-select-trigger:hover{border-color:var(--ink-300)}
  .login-view .login-select-trigger:focus-visible,
  .login-view .login-select-trigger[data-state="open"]{
    border-color:var(--aai-orange);box-shadow:0 0 0 3px var(--ring);
  }
  .login-view .trigger-user{display:flex;align-items:center;gap:10px}

  .login-view .remember{display:flex;align-items:center;gap:9px;font-size:13.5px;color:var(--fg-muted);cursor:pointer;user-select:none;margin-top:2px}
  .login-view .remember input{position:absolute;opacity:0;width:0;height:0}
  .login-view .remember .box{width:17px;height:17px;border-radius:5px;border:1px solid var(--ink-300);background:var(--ink-500);display:flex;align-items:center;justify-content:center;transition:all .15s var(--ease-out)}
  .login-view .remember .box svg{width:11px;height:11px;stroke:#fff;fill:none;stroke-width:2.6;opacity:0;transition:opacity .12s}
  .login-view .remember input:checked + .box{background:var(--aai-orange);border-color:var(--aai-orange)}
  .login-view .remember input:checked + .box svg{opacity:1}
  .login-view .remember input:focus-visible + .box{box-shadow:0 0 0 3px var(--ring)}

  .login-view .submit{
    margin-top:4px;width:100%;font-family:var(--font-sans);font-weight:600;font-size:15px;
    background:var(--aai-orange);color:#fff;border:0;border-radius:8px;padding:13px 16px;cursor:pointer;
    display:flex;align-items:center;justify-content:center;gap:9px;
    box-shadow:var(--glow-orange);
    transition:background .15s var(--ease-out),transform .12s var(--ease-out);
  }
  .login-view .submit:hover{background:var(--aai-orange-bright);transform:translateY(-1px)}
  .login-view .submit:active{background:var(--aai-orange-deep);transform:translateY(0)}
  .login-view .submit:disabled{cursor:wait;background:var(--aai-orange-deep)}
  .login-view .submit .spinner{width:16px;height:16px;border:2px solid rgba(255,255,255,.4);border-right-color:#fff;border-radius:50%;animation:login-spin .65s linear infinite;display:none}
  .login-view .submit.loading .spinner{display:block}
  .login-view .submit.loading .label{opacity:.85}
  @keyframes login-spin{to{transform:rotate(360deg)}}

  .login-view .footnote{margin-top:26px;text-align:center;font-size:13.5px;color:var(--fg-muted)}
  .login-view .footnote a{color:var(--aai-orange);text-decoration:none;font-weight:500}
  .login-view .footnote a:hover{text-decoration:underline}

  .login-view .secure{margin-top:28px;display:flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font-mono);font-size:11px;letter-spacing:.05em;color:var(--fg-faint)}
  .login-view .secure svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.8}

  /* mobile-only compact wordmark above the form */
  .login-view .auth .mobile-mark{display:none}
  @media (max-width:920px){.login-view .auth .mobile-mark{display:flex;margin-bottom:30px}}
`;
