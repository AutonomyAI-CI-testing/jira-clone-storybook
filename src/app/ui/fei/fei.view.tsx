// The page is deliberately theme-independent (always white), so the red is the
// fixed danger red (--Red600) instead of text-font-danger, which resolves to a
// pale Red300 in dark themes and would wash out against the white background.
export const FeiView = () => (
  <div className="grid h-full place-items-center bg-white">
    <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
  </div>
);
