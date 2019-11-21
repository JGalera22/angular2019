import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { TeamDto } from '../models/team.dto';
import { Team } from '../models/team.interface';

var collectionName = 'teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private db: AngularFirestore) { }

  checkCodigoAcceso(codigoAleatorio: string) {
    return this.db.collection(collectionName, ref => ref.where('codigo_acceso', '==', codigoAleatorio)).valueChanges();
  }
  
  async createTeam(nombre: string, codigoAleatorio: string) {
    //  User ID del usuario que está logueado
    let uid = localStorage.getItem('uid');

    // Cuando ya tengo un código correcto, creo el equipo y añado al usuario como miembro del equipo
    let teamDto = new TeamDto(nombre, uid, codigoAleatorio);

    // Me guardo en la siguiente variable el equipo que se crea para poder extraer su id
    let newTeam = await this.db.collection(collectionName).add(teamDto.transformarDto()).then(resp => {return resp; });

    // Guardo en localStorage el id del equipo que se acaba de crear
    localStorage.setItem('teamId', newTeam.id);

    // Utiliza el teamId para añadir al usuario que ha creado el equipo como primer miembro de este.
    this.db.collection(collectionName).doc(newTeam.id).collection('miembros').doc(uid).set({
      nombre: localStorage.getItem('nombre')
    });

    // Guardo en la colección 'users', sobre el documento del usuario
    // actual, el teamId
    return this.db.collection('users').doc(uid).update({
      teamId: localStorage.getItem('teamId')
    });
    
  }

  joinTeam(codigoAcceso: string) {
    let uid = localStorage.getItem('uid');
    let nombreUsuario = localStorage.getItem('nombre');

    this.db.collection(collectionName, ref => ref.where('codigo_acceso', '==', codigoAcceso))
    .snapshotChanges().subscribe(resp =>  {
      if(resp.length == 1) {
        let team = resp[0];

        return this.db.collection(collectionName).doc(team.payload.doc.id)
        .collection('miembros').doc(uid).set(
          {nombre: nombreUsuario}
        );
        
      } else {
        return null;
      }
    }, error => {
      // TODO
    });
  }

  getTeam(teamId: string) {
    return this.db.collection(collectionName).doc<Team>(teamId).valueChanges();
  }

  getMiembros(teamId: string) {
    return this.db.collection(collectionName).doc(teamId).collection('miembros').snapshotChanges();
  }
}
