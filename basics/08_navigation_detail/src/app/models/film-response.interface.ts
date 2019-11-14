import { Film } from './film.interface';

export interface FilmResponse {
    count: number;
    next?: any;
    previous?: any;
    results: Film[];
}