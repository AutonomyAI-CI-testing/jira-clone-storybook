export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <img
        src="/images/welcome-wizard.png"
        alt="Welcome wizard robot"
        className="h-[280px] w-auto"
      />
      <h1 className="font-primary-black text-5xl text-red-600">Welcome</h1>
    </div>
  );
};
