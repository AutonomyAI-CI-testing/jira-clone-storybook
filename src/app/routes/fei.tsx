// Standalone page: a plain white canvas with "Fei" centered in large red type.
// Deliberately independent of the app shell and the theme system — the request
// calls for a fixed white background and a fixed red headline in every theme.
//
// The colour is the design system's Danger Red (Red600, #e34935), written as a
// literal on purpose: the semantic class `text-font-danger` re-maps per theme
// (Red800 in the light themes, Red300 in the dark ones), and Red300 on this
// page's fixed white canvas would read as pale salmon, not red.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[#e34935]">Fei</h1>
    </div>
  );
}
