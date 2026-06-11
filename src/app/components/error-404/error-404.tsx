import { Button } from "@app/components/button";

// Inline styles for custom colors that override theme defaults
const TITLE_STYLE = { color: "#ff0000" };
const SUBTITLE_STYLE = { color: "#00ff00" };
const BUTTON_STYLE = {
  color: "#ff0000",
  borderColor: "#17ff00",
  borderWidth: "2px",
  borderStyle: "solid" as const,
  backgroundColor: "transparent",
};

// Floating animation for the illustration
const FLOAT_ANIMATION_STYLE = { animation: "float 3s ease-in-out infinite" };

// Keyframe animation for continuous floating effect
const FLOAT_KEYFRAMES = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export const Error404 = ({
  message = "Looks like you've wandered into unknown territory. The page you're looking for doesn't exist.",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-elevation-surface p-6">
      {/* Inject keyframes once for floating animation */}
      <style>{FLOAT_KEYFRAMES}</style>

      <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* Large 404 status code as visual anchor */}
        <h1
          className="animate-slide-down font-primary-black text-[120px] leading-none md:text-[160px]"
          style={TITLE_STYLE}
        >
          404
        </h1>

        {/* Friendly error title with decorative sparkles */}
        <h2
          className="flex items-center gap-2 font-primary-bold text-2xl md:text-3xl"
          style={SUBTITLE_STYLE}
        >
          <span className="text-2xl">✨</span>
          Oops! Page not found
          <span className="text-2xl">✨</span>
        </h2>

        {/* Illustration with continuous floating animation */}
        <div className="relative my-4">
          <img
            src="/images/error-404.svg"
            alt="404 illustration"
            className="h-[280px] w-auto animate-slide-up md:h-[320px]"
            style={FLOAT_ANIMATION_STYLE}
          />
        </div>

        {/* Customizable error message explaining what happened */}
        <p className="max-w-md font-primary text-lg leading-relaxed text-font-subtle">
          {message}
        </p>

        {/* Primary navigation back to safety */}
        <a href={href} className="mt-2">
          <Button
            color="primary"
            variant="contained"
            size="lg"
            style={BUTTON_STYLE}
          >
            Go back home
          </Button>
        </a>

        {/* Secondary fallback link to homepage */}
        <a
          href="/"
          className="font-primary text-base text-link hover:text-link-hovered hover:underline active:text-link-pressed"
        >
          Or return to the homepage
        </a>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
