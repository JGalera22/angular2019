import { Planet } from './planet.interface';

export interface PlanetResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}