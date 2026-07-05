import cx from "classix";

export const Error404 = ({ message, href = "/" }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 text-center" style={{ backgroundColor: "#00a8d8" }}>
      {/* Cat image */}
      <div className="relative">
        <img
          src="/images/cat-404.jpg"
          alt="A curious cat waving its paw"
          className="h-64 w-64 rounded-full object-cover shadow-2xl"
        />
        <span className="absolute -right-2 -top-2 rounded-full bg-background-brand-bold px-3 py-1 text-sm font-bold text-font-inverse shadow-md">
          404
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="font-primary-black text-4xl text-white">
          Oops, nothing here!
        </h1>
        <p className="max-w-sm text-base text-white/80">
          {message ??
            "Looks like this page got lost — even our cat can't find it."}
        </p>
      </div>

      {/* CTA */}
      <a
        href={href}
        className={cx(
          "inline-flex items-center gap-2 rounded-md px-6 py-2.5",
          "bg-white text-[#00a8d8] font-bold",
          "text-sm",
          "hover:bg-white/90 active:bg-white/80",
          "transition-colors duration-150"
        )}
      >
        ← Go back home
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
