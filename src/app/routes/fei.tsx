// Standalone page at /fei. Deliberately outside the __main layout so it renders
// on its own: a white surface with a single centered word and nothing else.
// The surface and the type colour are pinned to absolute values (white / the
// Red600 signal red) rather than semantic tokens, so the page looks the same in
// all five themes instead of going dark or washing out to a pale red.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
