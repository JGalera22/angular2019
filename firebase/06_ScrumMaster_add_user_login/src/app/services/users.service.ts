import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserDto } from '../models/user.dto';

const collectionName = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFirestore) { }

  createUser(uid: string, userDto: UserDto) {
    return this.db.collection(collectionName).doc(uid).set(
      userDto.transformarDto()
    );
  }

  /*
  createUserLocal() {
    let uid = localStorage.getItem('uid');
    this.db.collection(collectionName).doc(uid).set(
      {
        nombre: localStorage.getItem('nombre'),
        email: localStorage.getItem('email'),
        photo: localStorage.getItem('photo')
      }
    );
  }
  */
}
