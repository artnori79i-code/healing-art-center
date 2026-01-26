export interface Review {
  id: number;
  name: string;
  role: string;
  program: string;
  content: string;
  image: string;
}

export interface SubProgram {
  id: string;
  title: string;
  sessions: string;
  participants: string;
  content: string;
  link?: string;
  referenceImages?: string[];
}

export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  subPrograms?: SubProgram[];
}