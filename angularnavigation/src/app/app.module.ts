import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CiudadesListadoComponent } from './ciudades-listado/ciudades-listado.component';
import { CiudadesDetalleComponent } from './ciudades-detalle/ciudades-detalle.component';
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { FlextestComponent } from './flextest/flextest.component';


@NgModule({
  declarations: [
    AppComponent,
    CiudadesListadoComponent,
    CiudadesDetalleComponent,
    FlextestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
