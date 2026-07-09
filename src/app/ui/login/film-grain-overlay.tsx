export const FilmGrainOverlay = () => {
  return (
    <>
      <svg
        className="fixed inset-0 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="filmGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
              seed="2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="rgba(255, 255, 255, 0.03)"
          filter="url(#filmGrain)"
          opacity="0.4"
        />
      </svg>

      {/* CSS-based grain fallback */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 /></filter><rect width=%22100%22 height=%22100%22 fill=%22white%22 filter=%22url(%23noise)%22 /></svg>')",
          backgroundSize: "50px 50px",
        }}
      />
    </>
  );
};
