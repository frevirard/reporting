import { Biodiversite } from './../../DAO/biodiversite';
import { Injectable } from '@angular/core';
import listeQuest from '../../jsonData/listeQuestBio.json';

@Injectable({
  providedIn: 'root'
})
export class BiodiversiteServiceService {

  bio:Set<Biodiversite> =new Set();
  constructor() {
    listeQuest.forEach(x=>this.bio.add(x))
   }

  addBiodiversite(questionnaireBiodiversite:Biodiversite) {
    this.bio.add(questionnaireBiodiversite);
  }

  findBioById(idRecherche:number) {
    let ok:Biodiversite ={
      id: 0,
      idAction: 0,
      anneeReference: 0,
      typeMesure: '',
      integBiodiversite: '',
      partenariat: '',
      coridor: '',
      formation: '',
      evalImpact: '',
      engagement: '',
      incertitude: '',
      commentaire: ''
    } ;
    this.bio.forEach( x => {
      if(x.id === idRecherche) {
        ok = x;
      }
    }
    );
   return ok;
  }

  getBiodiversite() {
    return this.bio;
  }

}
