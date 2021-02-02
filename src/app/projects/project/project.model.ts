export class Project {
  name: string;
  links: Link[];
  technologies: string[];
  description: string;
}

export class Link {
  text: string;
  url: string;
}
