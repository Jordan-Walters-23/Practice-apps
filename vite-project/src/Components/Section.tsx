import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

function Section({ children, title = "Mysubheading" }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default Section;
