import { Injectable } from '@angular/core';
import { Action } from '../../DAO/action';
import listeactions from  '../../jsonData/listeActions.json'


@Injectable({
  providedIn: 'root'
})

export class ActionsService {

  actions:Action[] = [];
  passedAction:Action = {
    nom: '',
    statut: 0
  };

  constructor() {
    this.actions = listeactions;
   }

  getAction() {
    return this.actions;
  }

  addAction(action:Action) {
    this.actions.push(action)
  }


  getPassedAction() {
    return this.passedAction;
  }

  resetPasseAction() {
    this.passedAction =  {
      nom: '',
      statut: 0
    };
  }

  passAction(element:Action) {
    this.passedAction = element;
  }

}
