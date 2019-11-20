import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Story } from 'src/app/models/story.interface';
import { StoriesNewDialogComponent } from '../stories-new-dialog/stories-new-dialog.component';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';

@Component({
  selector: 'app-stories-listado',
  templateUrl: './stories-listado.component.html',
  styleUrls: ['./stories-listado.component.scss']
})
export class StoriesListadoComponent implements OnInit {

  listadoStories: FirestoreResponse<Story>[];
  displayedColumns: string[] = ['titulo', 'descripcion', 'estado', 'acciones'];

  constructor(
    private storiesService: StoriesService, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadStories();
  }

  loadStories() {
    // 5. debemos rellenar de elementos del array 'listadoStories'
    this.storiesService.getStories().subscribe(resp => {
      this.listadoStories = [];

      resp.forEach((story: any) => {
        this.listadoStories.push({ 
          id: story.payload.doc.id, 
          data: story.payload.doc.data() as Story 
        });
      });
      
    });
  }

  dialogNuevoStory() {
    let dialogRef = this.dialog.open(StoriesNewDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp != null) {
        if(resp) {
          this.snackBar.open("Historia creado correctamente", );
        } else {
          this.snackBar.open("Error al crear usuario");
        }
      }
    });
  }

  dialogEditUsuario(storyToEdit: Story) {
    let dialogRef = this.dialog.open(StoriesNewDialogComponent, {
      width: '300px',
      data: { story: storyToEdit}
    });
  }

  deleteStory(idStoryToDelete: string) {

  }


}
