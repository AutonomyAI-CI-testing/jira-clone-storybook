type Props = { title: string };

export const SectionTitle = ({ title }: Props) => (
  <h3 className="text-sm font-semibold text-[#0052cc]">{title}</h3>
);
