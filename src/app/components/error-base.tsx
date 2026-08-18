export const ErrorBase = ({ variant, message, href }: Props) => {
  const is404 = variant === "404";
  const imgPath = is404 ? `/images/wizard-robot.png` : `/images/error-${variant}.svg`;

  return (
    <div className="relative flex flex-col items-center text-center">
      {is404 ? (
        <div
          className="relative flex items-center justify-center mb-6 rounded-2xl overflow-hidden"
          style={{
            width: 340,
            height: 340,
            background: "linear-gradient(135deg, #1a1f4b 0%, #2d3a7c 40%, #1d4b6e 70%, #0e2a45 100%)",
          }}
        >
          {/* Stars background */}
          <div className="absolute inset-0" aria-hidden>
            {[
              [15, 12], [28, 28], [45, 8], [60, 22], [80, 15], [92, 30],
              [10, 55], [35, 48], [70, 40], [88, 52], [20, 75], [50, 68],
              [78, 80], [93, 70], [5, 88], [42, 90], [65, 85],
            ].map(([x, y], i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: i % 3 === 0 ? 3 : 2,
                  height: i % 3 === 0 ? 3 : 2,
                  opacity: 0.6 + (i % 4) * 0.1,
                }}
              />
            ))}
          </div>
          <img
            src={imgPath}
            alt="Wizard robot 404"
            className="relative z-10"
            style={{ height: 280, width: "auto", objectFit: "contain" }}
          />
        </div>
      ) : (
        <img
          src={imgPath}
          alt="Server error"
          className="mx-auto mb-4 h-[350px] w-auto"
        />
      )}
      {href ? (
        <a
          href={href}
          className={`max-w-[100px] text-lg hover:underline active:opacity-80 ${
            is404 ? "text-font-danger" : "text-link active:text-link-pressed"
          }`}
        >
          {message}
        </a>
      ) : (
        <span className={`max-w-[100px] text-lg ${is404 ? "text-font-danger" : "text-font"}`}>{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
