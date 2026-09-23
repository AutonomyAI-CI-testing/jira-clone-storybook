export function BuildFeiView() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8 bg-elevation-surface px-6 text-center">
      <img
        src="/images/build-fei-mascot.png"
        alt="Fei the robot wizard, wearing a starry hat and holding a wand"
        width={466}
        height={546}
        className="w-[240px] max-w-full select-none"
      />
      <h1 className="font-primary-black text-6xl text-font-danger">Build Fei</h1>
    </main>
  );
}
