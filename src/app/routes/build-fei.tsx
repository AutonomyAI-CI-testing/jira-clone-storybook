export default function BuildFeiRoute() {
  return (
    <div
      className="flex h-screen w-full items-start justify-center bg-white bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/build-fei-mascot.png)" }}
    >
      <h1
        className="mt-10 rounded-lg bg-white/95 px-6 py-2 font-primary-black text-5xl text-font-danger shadow-md"
      >
        Build <span className="text-font-success">Fei</span>
      </h1>
    </div>
  );
}
