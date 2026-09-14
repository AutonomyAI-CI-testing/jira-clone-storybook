import { Link } from "@remix-run/react";
import { HiOutlineStar } from "react-icons/hi2";
import { Button } from "@app/components/button";

export const BuildFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#092957]">
      <BackgroundStars />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <img
          src="/images/build-fei-wizard.png"
          alt="Fei the wizard robot"
          className="h-[280px] w-auto drop-shadow-lg"
        />
        <h1 className="font-primary-black text-6xl text-font-accent-green">
          Build Fei
        </h1>
        <p className="max-w-md font-primary-light text-lg text-[#dee4ea]">
          Your magical workspace for planning, previewing, and shipping work —
          conjured up and ready to go.
        </p>
        <Link to="/projects" className="mt-2">
          <Button color="primary" size="lg">
            Go to Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

const starPositions = [
  { top: "8%", left: "12%", size: 18, opacity: 0.9 },
  { top: "18%", left: "82%", size: 14, opacity: 0.7 },
  { top: "30%", left: "6%", size: 10, opacity: 0.6 },
  { top: "12%", left: "46%", size: 12, opacity: 0.8 },
  { top: "60%", left: "88%", size: 16, opacity: 0.7 },
  { top: "72%", left: "10%", size: 14, opacity: 0.6 },
  { top: "85%", left: "60%", size: 10, opacity: 0.5 },
  { top: "40%", left: "92%", size: 8, opacity: 0.5 },
  { top: "50%", left: "20%", size: 8, opacity: 0.5 },
  { top: "78%", left: "38%", size: 12, opacity: 0.6 },
];

const BackgroundStars = (): JSX.Element => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {starPositions.map((star, index) => (
        <HiOutlineStar
          key={index}
          className="absolute text-[#f5cd47]"
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
          }}
          size={star.size}
        />
      ))}
    </div>
  );
};
