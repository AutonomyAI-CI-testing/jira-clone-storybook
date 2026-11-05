// Standalone page: plain white ground, the word "Fei" centred in black.
// Registered at the top level of routes.ts so it renders with no app chrome.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* leading-none centres the line box, not CircularStd's ink, which sits
          0.06em high — nudge the word back onto the optical centre */}
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </div>
  );
}
