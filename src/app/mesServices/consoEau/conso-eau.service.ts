import { Injectable } from '@angular/core';
import { ConsoEau } from 'src/app/DAO/consoEau';

@Injectable({
  providedIn: 'root'
})
export class ConsoEauService {

  questConsos:ConsoEau[] = [];
  constructor() { }

  addConso(questionnaireConso:ConsoEau) {
    this.questConsos.push(questionnaireConso)
  }

  findConsoById(idRecherche:number) {
   var quest = this.questConsos.find(x=>x.id == idRecherche)

   if (quest) {
    return quest
   }

   return null;
  }

  getBiodiversite() {
    return this.questConsos;
  }

}
