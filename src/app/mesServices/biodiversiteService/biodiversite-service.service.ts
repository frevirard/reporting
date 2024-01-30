import { Biodiversite } from './../../DAO/biodiversite';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiodiversiteServiceService {

  bio:Biodiversite[] = []
  constructor() { }

  addBiodiversite(questionnaireBiodiversite:Biodiversite) {
    this.bio.push(questionnaireBiodiversite)
  }

  findBioById(idRecherche:number) {
   var bio = this.bio.find(x=>x.id == idRecherche)

   if (bio) {
    return bio
   }

   return null;
  }

  getBiodiversite() {
    return this.bio;
  }

}
