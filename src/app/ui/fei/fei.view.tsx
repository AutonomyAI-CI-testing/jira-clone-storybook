export const FeiView = () => {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* Fixed red (the design system's `danger` / Red600). `text-font-danger`
          flips to Red300 in the dark theme, which is unreadable on this page's
          fixed white background. */}
      <h1 className="font-primary-black text-8xl text-[#e34935]">Fei</h1>
    </div>
  );
};
