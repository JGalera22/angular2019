import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.interface';
import { UsuarioDto } from '../models/usuario.dto';

export const collectionName = 'usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private db: AngularFirestore) { }

  // CRUD (Create Read Update Delete)
  // [Create] un usuario
  public createUsuario(usuarioDto: UsuarioDto): Promise<DocumentReference> {
    // Obtengo la colección de usuarios
    const usuariosCollection = this.db.collection<Usuario>(collectionName);

    // Sobre la colección que he obtenido, añado el nuevo usuario
    return usuariosCollection.add(usuarioDto.transformarDto());
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
