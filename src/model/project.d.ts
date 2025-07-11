type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  status: "Done" | "In Progress" | "Planning";
};

type SocialLink = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
};
