import { Injectable } from '@angular/core';
import { Ges } from 'src/app/DAO/ges';
import questGest from 'src/app/jsonData/listeGes.json'

@Injectable({
  providedIn: 'root'
})
export class GesService {

  questGes:Ges[] = []
  constructor() {
    this.questGes = questGest;
  }

  addquesGes(questionnaire:Ges) {
    this.questGes.push(questionnaire);
  }

  findGesById(idRecherche:number) {
    var quest = this.questGes.find(x=>x.idAction == idRecherche)

    if (quest) {
     return quest
    }

    return null;
   }

   getGes() {
    return this.questGes;
  }
}
