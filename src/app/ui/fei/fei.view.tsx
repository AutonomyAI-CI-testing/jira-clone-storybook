// A deliberately bare page: white background, one word centered, nothing else.
// It opts out of the themed surface/font tokens on purpose so it stays a white
// page with a red wordmark regardless of the selected theme. The red is the
// raw Red600 swatch from app.css (the same red the light theme uses), not
// --color-font-danger, which would wash out to Red300 in dark mode.
export const FeiView = () => (
  <div className="flex min-h-screen w-full items-center justify-center bg-white">
    <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
      Fei
    </h1>
  </div>
);
