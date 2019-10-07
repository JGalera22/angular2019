import { Ciudad } from "./ciudad";
import { Country } from './country';

const SPAIN: Country = {id: 1, name: 'España', countryCode: 'es'};
const FRANCE: Country = {id: 1, name: 'Francia', countryCode: 'fr'};

export const CIUDADES: Ciudad[] = [
    { title: 'Sevilla', country: SPAIN, photoUrl: 'https://www.diariodesevilla.es/temas/terrazas-mejores-vistas-sevilla/imagenes/portada.jpg', rating: 98 },
    { title: 'Madrid', country: SPAIN, photoUrl: 'http://hostaloriente.es/wp-content/uploads/2019/03/madrid-1288x724.png', rating: 75 },
    { title: 'Valencia', country: SPAIN, photoUrl: 'https://static2.lasprovincias.es/www/multimedia/201801/08/media/cortadas/ciudad-artes-kXbB-U50574220968wkD-624x385@Las%20Provincias.jpg', rating: 80 },
    { title: 'Barcelona', country: SPAIN, photoUrl: 'https://avisassets.abgemea.com/.imaging/flexibleIntroSmall/dam/DMS/global/hg2-images/intros/barcelona/Barcelona_at_golden_hour_Credit_iStock_Eloi_Omella.jpg.jpg', rating: 50 },
    { title: 'París', country: FRANCE, photoUrl: 'https://static1lonelyplanetes.cdnstatics.com/sites/default/files/styles/max_1300x1300/public/fotos/Francia_Paris_shutterstock_122085496_Luciano%20Mortula_Shutterstock.jpg?itok=qBupjemQ', rating: 50 }
  ]; 