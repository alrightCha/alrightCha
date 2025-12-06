// User Profile Types
export interface UserProfile {
  username: string;
  description: string;
  pic?: string;
  mail?: string;
  github: string;
  joined?: number;
  tag?: string;
  location: string;
  origin: string;
}

// Blog/Paper Types
export interface BlogPost {
  topic: number;
  title: string;
  content: string;
  createdAt: string;
  description: string;
  isBlog: boolean;
}

// Project/Website Types
export interface Website {
  name: string;
  url: string;
  description: string;
  active: boolean;
  launchDate: string;
}

// Mode Enum
export enum EMode {
  Blog = 0,
  Projects = 1,
}

// Action Types
export enum ActionType {
  LINK = 0,
  BTN = 1,
  NIL = 2,
}
