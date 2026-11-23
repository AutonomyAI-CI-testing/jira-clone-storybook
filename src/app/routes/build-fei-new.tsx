import type { MetaFunction } from "react-router";

const mascot = "/images/build-fei-new/wizard.png";

export const meta: MetaFunction = () => {
  return [{ title: "Build Fei" }];
};

export default function BuildFeiNewRoute() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-elevation-surface">
      <h1 className="relative z-10 px-6 pt-[7vh] text-center font-primary-black text-[clamp(3rem,min(7vw,12vh),6rem)] leading-none text-font">
        Build Fei
      </h1>
      <img
        src={mascot}
        alt="Fei, a robot wizard wearing a starry hat and holding a wand"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[70vh] w-auto max-w-full translate-y-[5%] object-contain object-bottom"
      />
    </main>
  );
}
