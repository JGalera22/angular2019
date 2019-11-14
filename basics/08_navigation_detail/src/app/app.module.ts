import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsService } from './services/planets.service';
import { PlanetsListadoComponent } from './planets-listado/planets-listado.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FilmsService } from './services/films.service';
import { FilmsListadoComponent } from './films-listado/films-listado.component';

import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { PlanetsDetalleComponent } from './planets-detalle/planets-detalle.component';

const appRoutes: Routes = [
  {path: 'peliculas', component: FilmsListadoComponent},
  {path: 'planetas', component: PlanetsListadoComponent},
  {path: 'planeta/:idP', component: PlanetsDetalleComponent},
  {path: '', pathMatch: 'full', redirectTo: '/peliculas'},
  {path: '**', component: PaginaNoEncontradaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    FilmsListadoComponent,
    PaginaNoEncontradaComponent,
    PlanetsDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [PlanetsService,FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
