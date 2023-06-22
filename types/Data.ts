
export type Difficulty = "easy" | "medium" | "hard";
export type Types = "exercise" | "break" | "stretch";

export interface Sequence {
    slug: string,
    name: string,
    type: Types,
    reps?: number,
    duration: number
}


export interface Workout {
    slug: string,
    name: string,
    duration: number,
    difficulty: Difficulty
    sequence: Sequence[]
}