export type Spell = {
    id: string;
    name: string;
    description: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    }
}