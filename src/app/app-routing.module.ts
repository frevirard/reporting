import { MetricsComponent } from './composants/metrics/metrics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ActionsComponent } from './composants/actions/actions.component';
import { AffichageActionsComponent } from './composants/affichage-actions/affichage-actions.component';
import { TelechargementsComponent } from './composants/telechargements/telechargements.component';

const routes: Routes = [
  {path:"",  component:AccueilComponent},
  {path:"affichageActions",component:AffichageActionsComponent, loadChildren:()=> import('./composants/affichage-actions/actions.module').then(m=>m.ActionsModule)},
  {path:"metrics",component:MetricsComponent},
  {path:"telechargements",component:TelechargementsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


