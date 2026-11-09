export default function FeiRoute() {
  return (
    // The page is a fixed white surface, so it pins the light theme: the
    // semantic colour roles inside it resolve to their light values whatever
    // theme the app is in.
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
