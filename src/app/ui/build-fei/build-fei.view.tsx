import { Link } from "@remix-run/react";
import { HiSparkles } from "react-icons/hi";
import { Button } from "@app/components/button";

export const BuildFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden bg-[#092957]">
      {/* Starry night sky background, echoing the wizard hat pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#092957] via-[#09326c] to-[#0055cc]" />
        <Star className="left-[12%] top-[18%]" size={18} delay="0s" />
        <Star className="left-[80%] top-[12%]" size={14} delay="0.4s" />
        <Star className="left-[68%] top-[30%]" size={10} delay="0.9s" />
        <Star className="left-[22%] top-[62%]" size={12} delay="1.3s" />
        <Star className="left-[85%] top-[70%]" size={16} delay="0.2s" />
        <Star className="left-[45%] top-[10%]" size={10} delay="1.6s" />
        <Star className="left-[8%] top-[80%]" size={14} delay="0.7s" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <img
          src="/images/build-fei-wizard.png"
          alt="Fei the wizard robot"
          width={220}
          height={258}
          className="w-[180px] rounded-full outline outline-4 outline-[color:var(--Green400)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:w-[220px]"
        />
        <div className="flex items-center gap-2 text-[color:var(--Yellow300)]">
          <HiSparkles size={22} />
          <span className="font-primary-bold text-xs uppercase tracking-[0.2em]">
            Conjuring something new
          </span>
          <HiSparkles size={22} />
        </div>
        <h1 className="font-primary-black text-4xl text-font-inverse sm:text-5xl">
          <span className="text-[#e11d1d]">Build</span> Fei
        </h1>
        <p className="max-w-[440px] font-primary-light text-lg text-[color:var(--Blue200)]">
          Fei is ready to wave the wand. Tell it what to build next and watch
          the magic happen.
        </p>
        <Link to="/projects">
          <Button color="primary" size="lg">
            Back to projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Star = ({
  className = "",
  size = 12,
  delay = "0s",
}: StarProps): JSX.Element => (
  <span
    className={`absolute inline-block animate-pulse rounded-full bg-[color:var(--Yellow300)] opacity-70 ${className}`}
    style={{ width: size, height: size, animationDelay: delay }}
  />
);

interface StarProps {
  className?: string;
  size?: number;
  delay?: string;
}
