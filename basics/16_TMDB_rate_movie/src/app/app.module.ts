import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { PeliculasService } from './service/peliculas.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPeliculasLatestComponent } from './listado-peliculas-latest/listado-peliculas-latest.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { ListadoPeliculasTopComponent } from './listado-peliculas-top/listado-peliculas-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './service/auth.service';
import { PeliculaVotarDialogComponent } from './pelicula-votar-dialog/pelicula-votar-dialog.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

//RUTAS DE LA APP
const routes: Routes = [ 
  { path: 'populares', component: ListadoPeliculasComponent }, 
  { path: 'latest', component: ListadoPeliculasLatestComponent }, 
  { path: 'toprated', component: ListadoPeliculasTopComponent },
  { path: 'movie/:id', component: PeliculaDetalleComponent },
  { path: '', redirectTo: '/populares', pathMatch: 'full' }, 
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    PeliculaDetalleComponent,
    PaginaNoEncontradaComponent,
    ListadoPeliculasLatestComponent,
    ListadoPeliculasTopComponent,
    PeliculaVotarDialogComponent
  ],
  entryComponents: [
    PeliculaVotarDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(
      routes
    ),
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#FDB900",
      "radius": 20,
      "maxPercent": 100,
      "unitsFontSize": "12",
      "unitsFontWeight": "700",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#483500",
      "titleFontSize": "15",
      "titleFontWeight": "600",
      "subtitleColor": "#483500",
      "animateTitle": false,
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false
    }),
    BrowserAnimationsModule
  ],
  providers: [
    PeliculasService,
    AuthService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
