import { Pais } from './pais';

export interface Ciudad {
    nombre: string;
    rating: number;
    pais: Pais;
    photo_url: string;
}