export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div className="max-w-[500px] text-center">
      <img
        src="/images/error-404-wizard.png"
        alt="404 wizard robot"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-font-danger hover:underline active:text-font-danger"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font-danger">{message}</span>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
