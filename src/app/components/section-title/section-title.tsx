type Props = { title: string };

export const SectionTitle = ({ title }: Props) => (
  <h3 className="text-sm font-semibold text-font-brand">{title}</h3>
);
