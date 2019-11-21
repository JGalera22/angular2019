import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { StoriesListadoComponent } from './stories-listado/stories-listado.component';
import { RandomstringComponent } from './randomstring/randomstring.component';
import { TeamComponent } from './team/team.component';

export const DashboardRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'stories', component: StoriesListadoComponent },
  { path: 'team', component: TeamComponent },
  { path: 'aleatorio', component: RandomstringComponent }
];
