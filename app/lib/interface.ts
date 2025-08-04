export enum EMode {
    Blog = 0,
    Projects = 1,
}

// Move Action and ActionType here
export enum ActionType {
    LINK = 0,
    BTN = 1,
    NIL = 2
}

export interface Blog {
    id: string;
    authorId: string;
    topic: string;
    title: string;
    content: string; // This is HTML from the editor
    createdAt: number;
}