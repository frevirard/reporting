import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionsComponent } from './composants/actions/actions.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './composants/nav/nav.component';
import { MatSelectModule } from '@angular/material/select';
import { AccueilComponent } from './composants/accueil/accueil.component';
import {MatCardModule} from '@angular/material/card';
import { AffichageActionsComponent } from './composants/affichage-actions/affichage-actions.component';
import { ListeActionsComponent } from './composants/liste-actions/liste-actions.component';
import {MatIconModule} from '@angular/material/icon';
import { QuestionnairesComponent } from './composants/questionnaires/questionnaires.component';
import {MatTableModule} from '@angular/material/table';
import { MetricsComponent } from './composants/metrics/metrics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { SecondNAvComponent } from './composants/second-nav/second-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    NavComponent,
    AccueilComponent,
    AffichageActionsComponent,
    ListeActionsComponent,
    QuestionnairesComponent,
    MetricsComponent,
    SecondNAvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
