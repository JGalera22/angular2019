import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { StoriesService } from 'src/app/services/stories.service';
import { StoryDto } from 'src/app/models/story.dto';

const ESTADO_NO_ASIGNADA = 'NO_ASIGNADA';
const ESTADO_EN_PROGRESO = 'EN_PROGRESO';
const ESTADO_REALIZADA = 'REALIZADA';

@Component({
  selector: 'app-stories-new-dialog',
  templateUrl: './stories-new-dialog.component.html',
  styleUrls: ['./stories-new-dialog.component.scss']
})
export class StoriesNewDialogComponent implements OnInit {

  storyDto: StoryDto;

  constructor(
    public dialogRef: MatDialogRef<StoriesNewDialogComponent>,
    private storiesService: StoriesService
  ) { }

  ngOnInit() {
    this.storyDto = new StoryDto('', '', ESTADO_NO_ASIGNADA);
  }

  guardarUsuario() {
    this.storiesService.createStory(this.storyDto).then(respCorrecta => {
      this.dialogRef.close(true);
    }).catch(respError => {
      this.dialogRef.close(false);
    });
  }

  cerrar() {
    this.dialogRef.close(null);
  }

}
