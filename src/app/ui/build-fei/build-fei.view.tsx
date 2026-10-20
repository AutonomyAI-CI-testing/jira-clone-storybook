const feiImage = "/images/build-fei/wizard.png";

export const BuildFeiView = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-elevation-surface px-6 pt-[7vh] pb-[4vh]">
      <h1 className="shrink-0 font-primary-black text-5xl text-[#29FF00FF]">
        Build Fei
      </h1>
      <img
        src={feiImage}
        alt="Fei, a robot wizard wearing a starry hat and holding a wand"
        className="mt-4 min-h-0 w-auto max-w-full flex-1 object-contain object-bottom"
      />
    </main>
  );
};
