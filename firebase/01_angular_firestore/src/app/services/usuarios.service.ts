import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.interface';

export const collectionName = 'usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private db: AngularFirestore) { }

  // CRUD (Create Read Update Delete)
  // [Create] un usuario
  public createUsuario(e: string, n: string) {
    const usuariosCollection = this.db.collection<Usuario>(collectionName);
    // TODO: faltaría pasar un dto.
    return usuariosCollection.add({ nombre: n, email: e });
  }

  // [Read] listado de usuarios
  public getUsuarios() {
    return this.db.collection<Usuario>(collectionName).valueChanges();
  }

  // [Update] de usuario
  public updateUsuario() {}

  // [Delete] de usuario
  public deleteUsuario() {}
}
