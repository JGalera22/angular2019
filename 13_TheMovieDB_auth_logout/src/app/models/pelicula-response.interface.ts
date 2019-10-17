import { Pelicula } from './pelicula';

export interface PeliculaResponse {
    count: number;
    next: string;
    previous?: any;
    results: Pelicula[];
}