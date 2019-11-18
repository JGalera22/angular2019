import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { StoriesListadoComponent } from './stories-listado/stories-listado.component';

export const DashboardRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'stories', component: StoriesListadoComponent }
];
