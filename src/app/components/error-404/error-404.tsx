import { Button } from "../button";

export const Error404 = ({ message, href = "/projects" }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-neutral px-4">
      <div
        className="mb-8 rounded-full p-[3px]"
        style={{ background: "linear-gradient(135deg, #4eecd8 0%, #7eb3f7 50%, #c084fc 100%)" }}
      >
        <img
          src="/images/error-404.png"
          alt="404 character"
          className="w-72 h-72 object-cover rounded-full block"
        />
      </div>
      <h1 className="text-8xl font-black text-red-500 mb-4 leading-none tracking-tight">
        404
      </h1>
      <h2 className="text-xl font-semibold text-red-500 mb-2">
        {message ?? "Oops! Page not found."}
      </h2>
      <p className="text-sm text-red-500 mb-8 text-center max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a href={href}>
        <Button color="primary" variant="contained" size="lg">
          Go to Projects
        </Button>
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
