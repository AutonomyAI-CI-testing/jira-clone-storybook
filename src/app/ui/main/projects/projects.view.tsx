// The projects page is a single full-bleed splash: nothing on it but the
// wordmark, with the app header hidden by the route's `hideHeader` handle.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-[#e34935]">
        Fei
      </h1>
    </div>
  );
};
