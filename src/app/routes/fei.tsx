import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

/**
 * Standalone full-page route: a plain white canvas with a single large
 * red word centred in the viewport.
 *
 * This page is deliberately theme-independent, so its colours are fixed
 * literals rather than semantic tokens: the background must stay white and
 * the wordmark keeps the same red whichever theme is active. The value is
 * the palette's Red600 (#e34935), the same red the design tokens expose.
 */
export function FeiPage() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-[120px] leading-none text-[#e34935]">
        Fei
      </h1>
    </main>
  );
}

export default FeiPage;
