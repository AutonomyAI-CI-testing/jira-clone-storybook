import { Button } from "@app/components/button";

export const Error404 = ({
  message = "Looks like you got lost in another dimension!",
  href,
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 py-16">
      {/* Circular character image with gradient ring */}
      <div className="relative mb-10">
        {/*
          Gradient border trick:
          - Outer div is slightly larger, has the gradient background and no overflow
          - Inner div clips the image to a circle exactly 6px inset from the edge
          - This creates a single solid gradient ring with no white gap
        */}
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4ecdc4 0%, #74b9ff 40%, #a29bfe 75%, #b8a9f8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            role="img"
            aria-label="Lost character"
            style={{
              width: 290,
              height: 290,
              borderRadius: "50%",
              flexShrink: 0,
              backgroundImage: "url('/images/error-404-character.png')",
              backgroundSize: "140%",
              backgroundPosition: "42% 46%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* 404 large text */}
      <h1
        className="mb-3 font-primary-black leading-none tracking-tight text-font"
        style={{ fontSize: "clamp(5rem, 15vw, 9rem)" }}
      >
        404
      </h1>

      {/* Subtitle */}
      <p className="mb-2 text-2xl font-primary-bold text-font">
        Page Not Found
      </p>

      {/* Message */}
      <p className="mb-10 max-w-sm text-center text-base font-primary-light text-font-subtle">
        {message}
      </p>

      {/* CTA */}
      {href && (
        <a href={href}>
          <Button color="primary" variant="contained" size="lg">
            Take me home
          </Button>
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href: string;
}
