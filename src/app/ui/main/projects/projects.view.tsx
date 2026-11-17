// The projects page is a standalone full-screen canvas: a black background
// with the wordmark centred on it. It renders outside the main layout, so it
// has no header, no list and nothing else on it.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[color:var(--Green500)]">
        Fei
      </h1>
    </div>
  );
};
