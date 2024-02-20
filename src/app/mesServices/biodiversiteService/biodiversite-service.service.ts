import { Biodiversite } from './../../DAO/biodiversite';
import { Injectable } from '@angular/core';
import listeQuest from '../../jsonData/listeQuestBio.json';

@Injectable({
  providedIn: 'root'
})
export class BiodiversiteServiceService {

  bio:Biodiversite[] = [];
  constructor() {
    this.bio = listeQuest;
   }

  addBiodiversite(questionnaireBiodiversite:Biodiversite) {
    this.bio.push(questionnaireBiodiversite)
  }

  findBioById(idRecherche:number) {
   var bio = this.bio.find(x=>x.idAction == idRecherche)

   if (bio) {
    return bio
   }

   return null;
  }

  getBiodiversite() {
    return this.bio;
  }

}
