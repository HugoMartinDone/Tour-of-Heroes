import { HeroClass } from "./hero-class.enum";

export interface Hero {
    id: number;
    name: string;
    class: HeroClass;
}
