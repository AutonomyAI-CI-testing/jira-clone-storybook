import { V2_MetaFunction } from "@remix-run/node";

/**
 * Standalone page: a plain white canvas with the word "Fei" centered.
 *
 * The white background is hardcoded on purpose (instead of a theme token) so
 * the page stays white regardless of the active theme. The word itself uses the
 * design system's red text token (font-danger).
 * Per the request, this page carries no other text, decoration or variation.
 */
export const meta: V2_MetaFunction = () => [{ title: "Fei" }];

export default function FeiPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
}
