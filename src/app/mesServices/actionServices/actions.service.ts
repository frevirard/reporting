import { Injectable } from '@angular/core';
import { Action } from '../../DAO/action';
import listeactions from  '../../jsonData/listeActions.json'

@Injectable({
  providedIn: 'root'
})

export class ActionsService {

  actions:Action[] = [];

  constructor() {
    this.actions = listeactions;
   }

  getAction() {
    return this.actions;
  }

  addAction(action:Action) {
    this.actions.push(action)
  }


}
