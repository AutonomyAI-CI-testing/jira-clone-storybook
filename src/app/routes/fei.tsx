// A deliberately bare page: a white canvas with a single word centred on it.
// It sits outside the main layout so no header or navigation is rendered.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* The page is theme-independent (always white), so it uses the palette's
          own red rather than a semantic token, which changes per theme. */}
      <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
