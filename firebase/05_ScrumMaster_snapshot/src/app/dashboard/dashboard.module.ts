import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatChipsModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MAT_CHIPS_DEFAULT_OPTIONS,
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { StoriesListadoComponent } from './stories-listado/stories-listado.component';
import { StoriesNewDialogComponent } from './stories-new-dialog/stories-new-dialog.component';
import { StoriesService } from '../services/stories.service';

import { AuthService } from '../services/auth.service';
import { RandomstringComponent } from './randomstring/randomstring.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatChipsModule,
    ChartsModule,
    FormsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [DashboardComponent, StoriesListadoComponent, StoriesNewDialogComponent, RandomstringComponent],
  entryComponents: [StoriesNewDialogComponent],
  providers: [
    StoriesService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}},
    AuthService
  ]
})
export class DashboardModule {}
