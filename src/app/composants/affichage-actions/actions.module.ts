import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from '../accueil/accueil.component';
import { AffichageActionsComponent } from './affichage-actions.component';
import { ActionsComponent } from '../actions/actions.component';
import { ListeActionsComponent } from '../liste-actions/liste-actions.component';
import { QuestionnairesComponent } from '../questionnaires/questionnaires.component';

const routes: Routes = [
  {path:"",
        children: [
          {path:"actions",  component:ActionsComponent},
          {path:"liste",  component:ListeActionsComponent},
          {path:"questionnaires",component:QuestionnairesComponent}
        ]}
];


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActionsModule { }
