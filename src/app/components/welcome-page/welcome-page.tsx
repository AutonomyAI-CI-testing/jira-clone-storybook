export const WelcomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface">
      <div className="flex max-w-[500px] flex-col items-center text-center">
        <img
          src="/images/welcome-wizard.png"
          alt="Welcome wizard"
          className="mx-auto mb-8 h-[350px] w-auto"
        />
        <h1 className="font-primary-black text-5xl text-font">Welcome</h1>
      </div>
    </div>
  );
};
