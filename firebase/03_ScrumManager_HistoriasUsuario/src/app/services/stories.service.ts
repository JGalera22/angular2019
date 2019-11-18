import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Story } from '../models/story.interface';
import { StoryDto } from '../models/story.dto';

export const collectionName = 'stories';


@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  constructor(private db: AngularFirestore) { }

  // CRUD (Create Read Update Delete)
  // [Create] un story
  public createStory(storyDto: StoryDto): Promise<DocumentReference> {
    // Obtengo la colección de stories
    const usuariosCollection = this.db.collection<Story>(collectionName);

    // Sobre la colección que he obtenido, añado el nuevo usuario
    return usuariosCollection.add(storyDto.transformarDto());
  }

  // [Read] listado de stories
  public getStories() {
    return this.db.collection<Story>(collectionName).valueChanges();
  }

  // [Update] de story
  public updateStory() {}

  // [Delete] de story
  public deleteStory() {}
}
