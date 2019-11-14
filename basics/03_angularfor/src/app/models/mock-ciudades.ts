import { Pais } from './pais';
import { Ciudad } from './ciudad';

const SPAIN: Pais = {nombre: 'España', iso_code: 'es'};
const ITALY: Pais = {nombre: 'Italia', iso_code: 'it'};
const FRANCE: Pais = {nombre: 'Francia', iso_code: 'fr'};

export const CIUDADES: Ciudad[] = [
    {nombre: 'Sevilla', rating: 100, pais: SPAIN, photo_url: 'https://www.diariodesevilla.es/temas/terrazas-mejores-vistas-sevilla/imagenes/portada.jpg'},
    {nombre: 'Madrid', rating: 70, pais: SPAIN, photo_url: 'http://hostaloriente.es/wp-content/uploads/2019/03/madrid-1288x724.png'},
    {nombre: 'Roma', rating: 80, pais: ITALY, photo_url: 'https://s2.eestatic.com/2018/07/10/social/Antigua_Roma-Historia-La_Jungla_321479699_86290831_1024x576.jpg'},
    {nombre: 'Turín', rating: 100, pais: ITALY, photo_url: 'https://afrodita-production.s3.amazonaws.com/images/turin-card-m180917.original.jpg'},
    {nombre: 'París', rating: 100, pais: FRANCE, photo_url: 'https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg'},
    {nombre: 'Andorra', rating: 100, pais: FRANCE, photo_url: 'https://www.roomsday.com/blog/wp-content/uploads/2018/10/andorra-la-vella.jpg'}
];
