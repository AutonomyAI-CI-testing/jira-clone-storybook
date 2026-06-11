/**
 * WizardRobotIllustration component
 *
 * SVG illustration of a wizard robot character inspired by Leonardo da Vinci's
 * Vitruvian Man, with a four-armed robot wearing a wizard hat and displaying
 * a green monitor screen for a face. The illustration uses a parchment-style
 * background with geometric construction guides.
 */
const WizardRobotIllustration = () => (
  <svg
    viewBox="0 0 500 550"
    className="mb-8 h-64 w-auto object-contain sm:h-80"
    aria-label="Wizard robot mascot"
  >
    {/* Parchment background */}
    <rect width="500" height="550" fill="#f2e8d5" />

    {/* Subtle texture dots */}
    <circle cx="85" cy="42" r="1.2" fill="#d5c9ad" opacity="0.4" />
    <circle cx="412" cy="88" r="1" fill="#d5c9ad" opacity="0.3" />
    <circle cx="156" cy="115" r="0.8" fill="#d5c9ad" opacity="0.35" />
    <circle cx="342" cy="148" r="1.1" fill="#d5c9ad" opacity="0.4" />
    <circle cx="68" cy="192" r="0.9" fill="#d5c9ad" opacity="0.3" />
    <circle cx="438" cy="235" r="1" fill="#d5c9ad" opacity="0.35" />
    <circle cx="122" cy="288" r="1.2" fill="#d5c9ad" opacity="0.4" />
    <circle cx="375" cy="325" r="0.8" fill="#d5c9ad" opacity="0.3" />
    <circle cx="218" cy="372" r="1" fill="#d5c9ad" opacity="0.35" />
    <circle cx="95" cy="415" r="1.1" fill="#d5c9ad" opacity="0.4" />
    <circle cx="428" cy="468" r="0.9" fill="#d5c9ad" opacity="0.3" />
    <circle cx="285" cy="512" r="1" fill="#d5c9ad" opacity="0.35" />

    {/* Large circle frame */}
    <circle
      cx="250"
      cy="295"
      r="210"
      fill="none"
      stroke="#9b7b5e"
      strokeWidth="2.5"
    />

    {/* Inscribed rectangle (Vitruvian Man guides) */}
    <rect
      x="60"
      y="130"
      width="380"
      height="330"
      fill="none"
      stroke="#9b7b5e"
      strokeWidth="1"
      opacity="0.5"
    />
    {/* Horizontal arm line */}
    <line
      x1="40"
      y1="295"
      x2="460"
      y2="295"
      stroke="#9b7b5e"
      strokeWidth="1"
      opacity="0.4"
    />

    {/* === WIZARD HAT === */}
    {/* Hat brim (wide flat ellipse) - back shadow layer */}
    <ellipse cx="250" cy="185" rx="115" ry="18" fill="#1e2f55" opacity="0.3" />

    {/* Hat cone (tall, slightly bent tip) */}
    <path d="M 135 185 Q 180 100 245 35 Q 310 100 365 185 Z" fill="#2d4a80" />

    {/* Hat tip crook (slight right bend) */}
    <path d="M 240 42 Q 255 28 270 35 Q 258 40 250 45 Z" fill="#2a3f6b" />

    {/* Stars on hat */}
    <path
      d="M 250 65 l4 11 l11 1.5 l-8 7 l2.5 11 l-9.5-5 l-9.5 5 l2.5-11 l-8-7 l11-1.5 Z"
      fill="#f5c518"
    />
    <path
      d="M 190 120 l3 8 l8 1 l-6 5 l2 8 l-7-4 l-7 4 l2-8 l-6-5 l8-1 Z"
      fill="#f5c518"
    />
    <path
      d="M 310 115 l3 8 l8 1 l-6 5 l2 8 l-7-4 l-7 4 l2-8 l-6-5 l8-1 Z"
      fill="#f5c518"
    />
    <path
      d="M 165 160 l2.5 6 l6 0.8 l-4.5 4 l1.5 6 l-5.5-3 l-5.5 3 l1.5-6 l-4.5-4 l6-0.8 Z"
      fill="#f5c518"
    />
    <path
      d="M 335 155 l2.5 6 l6 0.8 l-4.5 4 l1.5 6 l-5.5-3 l-5.5 3 l1.5-6 l-4.5-4 l6-0.8 Z"
      fill="#f5c518"
    />

    {/* Crescent moons on hat */}
    <path d="M 220 95 a 8 8 0 1 0 0.1 0 a 5 5 0 1 1 -0.1 0 Z" fill="#f5c518" />
    <path
      d="M 278 108 a 7 7 0 1 0 0.1 0 a 4.5 4.5 0 1 1 -0.1 0 Z"
      fill="#f5c518"
    />
    <path
      d="M 205 148 a 6 6 0 1 0 0.1 0 a 3.8 3.8 0 1 1 -0.1 0 Z"
      fill="#f5c518"
    />

    {/* Hat brim (wide flat ellipse) - front */}
    <ellipse cx="250" cy="185" rx="115" ry="18" fill="#2a3f6b" />

    {/* === ARMS (4 arms) === */}
    {/* Left upper arm */}
    <rect x="50" y="235" width="120" height="14" fill="#4a4a4a" rx="7" />
    {/* Left lower arm */}
    <rect x="50" y="268" width="120" height="14" fill="#4a4a4a" rx="7" />
    {/* Right upper arm */}
    <rect x="330" y="235" width="120" height="14" fill="#4a4a4a" rx="7" />
    {/* Right lower arm */}
    <rect x="330" y="268" width="120" height="14" fill="#4a4a4a" rx="7" />

    {/* === GLOVED HANDS === */}
    {/* Left upper glove */}
    <ellipse cx="52" cy="242" rx="18" ry="15" fill="#f0f0f0" />
    <rect x="28" y="230" width="8" height="14" fill="#f0f0f0" rx="4" />
    <rect x="37" y="226" width="8" height="18" fill="#f0f0f0" rx="4" />
    <rect x="46" y="224" width="8" height="20" fill="#f0f0f0" rx="4" />
    <rect x="50" y="252" width="20" height="5" fill="#d0d0d0" rx="2" />

    {/* Left lower glove */}
    <ellipse cx="52" cy="275" rx="18" ry="15" fill="#f0f0f0" />
    <rect x="28" y="263" width="8" height="14" fill="#f0f0f0" rx="4" />
    <rect x="37" y="259" width="8" height="18" fill="#f0f0f0" rx="4" />
    <rect x="46" y="257" width="8" height="20" fill="#f0f0f0" rx="4" />
    <rect x="50" y="285" width="20" height="5" fill="#d0d0d0" rx="2" />

    {/* Right upper glove */}
    <ellipse cx="448" cy="242" rx="18" ry="15" fill="#f0f0f0" />
    <rect x="464" y="230" width="8" height="14" fill="#f0f0f0" rx="4" />
    <rect x="455" y="226" width="8" height="18" fill="#f0f0f0" rx="4" />
    <rect x="446" y="224" width="8" height="20" fill="#f0f0f0" rx="4" />
    <rect x="430" y="252" width="20" height="5" fill="#d0d0d0" rx="2" />

    {/* Right lower glove */}
    <ellipse cx="448" cy="275" rx="18" ry="15" fill="#f0f0f0" />
    <rect x="464" y="263" width="8" height="14" fill="#f0f0f0" rx="4" />
    <rect x="455" y="259" width="8" height="18" fill="#f0f0f0" rx="4" />
    <rect x="446" y="257" width="8" height="20" fill="#f0f0f0" rx="4" />
    <rect x="430" y="285" width="20" height="5" fill="#d0d0d0" rx="2" />

    {/* === ROBOT HEAD (TV monitor) === */}
    {/* Head outer case */}
    <rect x="170" y="185" width="160" height="130" fill="#7d5c3a" rx="8" />
    {/* Screen bezel inset */}
    <rect x="182" y="195" width="136" height="110" fill="#5a3f26" rx="4" />
    {/* Green screen */}
    <rect x="188" y="200" width="124" height="100" fill="#6db83e" rx="3" />
    {/* Screen center glow (brighter green) */}
    <ellipse cx="250" cy="250" rx="45" ry="35" fill="#7dc547" opacity="0.7" />
    {/* Screen highlight/glare */}
    <path
      d="M 195 205 Q 230 200 260 215 Q 240 230 205 225 Z"
      fill="white"
      opacity="0.35"
    />
    <path
      d="M 260 202 Q 310 200 308 220 Q 285 210 262 218 Z"
      fill="white"
      opacity="0.2"
    />
    {/* Antenna nubs on head */}
    <rect x="220" y="178" width="8" height="12" fill="#5a3f26" rx="2" />
    <rect x="272" y="178" width="8" height="12" fill="#5a3f26" rx="2" />

    {/* === TORSO/BODY connector === */}
    <rect x="195" y="315" width="110" height="65" fill="#7d5c3a" rx="5" />
    {/* Golden button */}
    <circle cx="250" cy="347" r="14" fill="#c8890a" />
    <circle cx="250" cy="347" r="10" fill="#f0ac1a" />
    {/* Body bolts */}
    <circle cx="205" cy="325" r="4" fill="#5a3f26" />
    <circle cx="295" cy="325" r="4" fill="#5a3f26" />

    {/* === LEGS === */}
    {/* Upper legs */}
    <rect x="205" y="378" width="35" height="45" fill="#7d5c3a" rx="4" />
    <rect x="260" y="378" width="35" height="45" fill="#7d5c3a" rx="4" />
    {/* Lower legs/boots */}
    <rect x="202" y="418" width="42" height="30" fill="#5c3d1e" rx="3" />
    <rect x="257" y="418" width="42" height="30" fill="#5c3d1e" rx="3" />
    {/* Boot soles (slightly wider) */}
    <rect x="198" y="442" width="50" height="10" fill="#3d2810" rx="2" />
    <rect x="253" y="442" width="50" height="10" fill="#3d2810" rx="2" />
  </svg>
);

/**
 * Error404 component
 *
 * A full-page 404 error page featuring a whimsical wizard robot illustration,
 * clear error messaging, and a call-to-action button to navigate back to safety.
 * Designed to work in both Remix CatchBoundary contexts and standalone routes.
 */
export const Error404 = ({
  message = "Oops! This page doesn't exist",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 text-center">
      <WizardRobotIllustration />
      <h1 className="mb-2 font-primary-black text-8xl tracking-tight text-font sm:text-9xl">
        404
      </h1>
      <h2 className="mb-3 font-primary-bold text-2xl text-font-danger sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md font-primary text-base text-font-subtle">
        {message}
      </p>
      <a
        href={href}
        className="rounded bg-background-brand-bold px-6 py-3 font-primary-bold text-sm text-font-inverse transition-colors duration-200 hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
      >
        Go to Dashboard
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
