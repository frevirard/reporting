import { Injectable } from '@angular/core';
import { ConsoEau } from 'src/app/DAO/consoEau';
import listeQuestEau from 'src/app/jsonData/listeQuestEau.json'

@Injectable({
  providedIn: 'root'
})
export class ConsoEauService {

  questConsos:ConsoEau[] = [];
  constructor() {
    this.questConsos = listeQuestEau;
  }

  addConso(questionnaireConso:ConsoEau) {
    if(this.questConsos.find(x=> x.idAction === questionnaireConso.idAction)) {
      this.questConsos[this.questConsos.findIndex(x => x.idAction = questionnaireConso.idAction)] =  questionnaireConso;
      return;
    }
    this.questConsos.push(questionnaireConso)
  }

  findConsoById(idRecherche:number) {
   var quest = this.questConsos.find(x=>x.idAction == idRecherche)

   if (quest) {
    return quest
   }

   return null;
  }

  getBiodiversite() {
    return this.questConsos;
  }

}
