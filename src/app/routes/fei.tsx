// Standalone page: nothing but the word "Fei" centered on a white background.
// The `light` theme class is pinned because the surface is pinned white: it keeps
// the red text token (--color-font-danger) resolving to the same red for every
// visitor instead of following the theme of the surrounding app.
export default function FeiRoute() {
  return (
    <div className="light grid h-full place-items-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
