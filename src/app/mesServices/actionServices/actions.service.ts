import { Injectable } from '@angular/core';
import { Action } from '../../DAO/action';
import listeactions from  '../../jsonData/listeActions.json'
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ActionsService {

  actions:Set<Action> = new Set();
  passedAction:Action = {
    id:0,
    nom: '',
    idSecteur: 0,
    statut: 0
  };

  constructor() {
     listeactions.forEach(x=> this.actions.add(x));
   }

  getAction() {
    return this.actions;
  }

  addAction(action:Action) {
    // if(this.actions.find(x=> x.id === action.id)) {
    //   console.log("index")
    //   console.log(this.actions.findIndex(x => x.id = action.id))
    //   this.actions[this.actions.findIndex(x => x.id = action.id)] = action;
    //   return;
    // }
    // this.actions.push(action)
    this.actions.add(action);
    console.log("ajouté")
    console.log(this.actions);
  }


  getPassedAction() {
    return this.passedAction;
  }

  resetPasseAction() {
    this.passedAction =  {
      id:0,
      nom: '',
      idSecteur: 0,
      statut: 0
    };
  }

  passAction(element:Action) {
    this.passedAction = element;
  }

}
