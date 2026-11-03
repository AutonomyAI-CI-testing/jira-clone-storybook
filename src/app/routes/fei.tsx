// A deliberately bare page: a fixed white ground with a single centred word.
// It lives outside the __main layout so no header, sidebar or chrome renders
// around it, and it pins the light theme on its own container (see the design
// system's Pin-Only-When-Fixed rule) so the white surface and its text colour
// keep their look under all five themes. `bg-white` is one of the three
// literals the Tailwind config declares, and this page is the fixed-look
// surface the pinning rule is for; the red is the system's red text role.
export default function FeiRoute() {
  return (
    <div className="light flex h-full w-full items-center justify-center bg-white text-font-danger">
      <h1 className="font-primary-black text-5xl">Fei</h1>
    </div>
  );
}
