import type { MetaFunction } from "react-router";

const mascot = "/images/build-fei/wizard.png";

export const meta: MetaFunction = () => {
  return [{ title: "Build Fei" }];
};

export default function BuildFeiPageRoute() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-white">
      <h1 className="relative z-10 px-6 pt-[7vh] text-center font-primary-black text-[clamp(3rem,min(7vw,12vh),6rem)] leading-none">
        <span className="text-[color:var(--Red600)]">Build</span>{" "}
        <span className="text-[color:var(--Green600)]">Fei</span>
      </h1>
      <img
        src={mascot}
        alt="Fei, a robot wizard wearing a starry hat and holding a wand"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[70vh] w-auto max-w-full translate-y-[5%] object-contain object-bottom"
      />
    </main>
  );
}
