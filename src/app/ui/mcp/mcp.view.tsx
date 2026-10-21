import cx from "classix";

export const McpView = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative -rotate-2 rounded-[28px_8px_32px_10px] border-4 border-border-brand bg-elevation-surface-raised px-16 py-12 shadow-[12px_12px_0_0_var(--color-font)]">
        <p className="font-primary-black text-[8rem] leading-none">
          <span className="text-[#E63946]">M</span>
          <span className="text-font-subtlest">-</span>
          <span className="text-[#1D4ED8]">C</span>
          <span className="text-font-subtlest">-</span>
          <span className="text-[#16A34A]">P</span>
        </p>
        <FrameDot position="-left-3 -top-3" color="bg-[#E63946]" />
        <FrameDot position="-right-3 -top-3" color="bg-[#1D4ED8]" />
        <FrameDot position="-right-3 -bottom-3" color="bg-[#16A34A]" />
        <FrameDot position="-left-3 -bottom-3" color="bg-[#E63946]" />
      </div>
    </div>
  );
};

interface FrameDotProps {
  position: string;
  color: string;
}

const FrameDot = ({ position, color }: FrameDotProps) => {
  return (
    <span className={cx("absolute h-5 w-5 rounded-full", position, color)} />
  );
};
