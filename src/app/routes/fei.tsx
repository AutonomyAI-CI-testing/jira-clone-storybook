// Registered outside the __main layout, so the page renders bare: no header,
// no session gate. Colours are pinned outside the semantic layer — literal white
// for the surface, the raw palette red for the ink — because every token
// re-resolves per theme and this page must look the same in all of them.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white text-[color:var(--Red600)]">
      {/* CircularStdBlack's font metrics are asymmetric, so a flex-centred line
          box leaves the ink above the middle. The em-based nudge scales with
          the clamp() size and puts the word itself on the centre line. */}
      <span className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none">
        Fei
      </span>
    </div>
  );
}
