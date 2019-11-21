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
    // 5. Cambio valueChanges() por snapshotChanges()
    return this.db.collection<Story>(collectionName).snapshotChanges();
  }

  // [Update] de story
  public updateStory(idStoryToUpdate: string, storyDto: StoryDto) {
    // 5. Cojo la opción 2 pro del deleteStory
    return this.db.doc(`${collectionName}/${idStoryToUpdate}`).update(storyDto.transformarDto());
  }

  // [Delete] de story
  // 5. Tengo que recibir el "id" del story a eliminar
  public deleteStory(idStoryToDelete: string) {
    // id = "n4378urf83rhf82";
    // stories/n4378urf83rhf82
    
    // Opcion 1
    // return this.db.collection(collectionName).doc(idStoryToDelete).delete();

    // Opcion 2 (más corta)
    // return this.db.doc('stories/'+idStoryToDelete).delete();
    
    // Opcion 2 (pro) -- template literal (OJO!!!! las comillas son francesas)
    return this.db.doc(`${collectionName}/${idStoryToDelete}`).delete();
  }
}
