import { Secteur } from './../../DAO/secteur';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import secteurs from './../../jsonData/secteur.json';
import { Action } from 'src/app/DAO/action';
import { Biodiversite } from 'src/app/DAO/biodiversite';
import listeactions from  './../../jsonData/listeActions.json';
import { ActionsService } from 'src/app/mesServices/actionServices/actions.service';
import { ConsoEau } from 'src/app/DAO/consoEau';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  secteurs:Secteur[] = []
  listeActions: Action[] = []
  action:Action = {
    nom: '',
    idSecteur: 0,
    statut: 0
  }

  questBiodiversite:Biodiversite = {
    id: 0,
    idAction: 0,
    anneeReference: 0,
    typeMesure: '',
    integBiodiversite: '',
    partenariat: '',
    coridor: '',
    formation: '',
    evalImpact: '',
    engagement: '',
    incertitude: '',
    commentaire: ''
  }

  questConsoEau:ConsoEau = {
    id:0,
    idAction:0,
    anneeReference:0,
    typeInstallation:'',
    sourceAppro: '',
    usageEauMesure:'',
    methodeMesure:'',
    consoEau:'',
    evolution:'',
    mesurePrise:'',
    facteurIncertitude:'',
    commentaire:'',

  }



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]

  });
  secondFormGroup = this._formBuilder.group({
    anneeReference: ['', [Validators.maxLength(4),Validators.min(2000),Validators.max(2024)]],
    typeMesure:['', Validators.required],
    integBiodiversite:['', Validators.required],
    partenariat:['', Validators.required],
    coridor:['', Validators.required],
    formation:['', Validators.required],
    evalImpact:['', Validators.required],
    engagement:['', Validators.required],
    incertitude:['', Validators.required],
    commentaire:['']
  });


  thirdFormGroup = this._formBuilder.group({
    anneeReference: ['', [Validators.maxLength(4),Validators.min(2000),Validators.max(2024)]],
    typeInstallation:['', Validators.required],
    sourceAppro: ['', Validators.required],
    usageEauMesure:['', Validators.required],
    methodeMesure:['', Validators.required],
    consoEau:['', Validators.required],
    evolution:['', Validators.required],
    mesurePrise:['', Validators.required],
    facteurIncertitude:['', Validators.required],
    commentaire:['']

  });


  isOptional = false;

  constructor(private _formBuilder: FormBuilder, private actionsService: ActionsService) {}

  ngOnInit() {

    this.secteurs = secteurs
    this.listeActions = listeactions;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      anneeReference: ['', [Validators.maxLength(4),Validators.min(2000),Validators.max(2024)]],
      typeMesure:['', Validators.required],
      integBiodiversite:['', Validators.required],
      partenariat:['', Validators.required],
      coridor:['', Validators.required],
      formation:['', Validators.required],
      evalImpact:['', Validators.required],
      engagement:['', Validators.required],
      incertitude:['', Validators.required],
      commentaire:[''],
    });

    this.thirdFormGroup = this._formBuilder.group({
      anneeReference: ['', [Validators.maxLength(4),Validators.min(2000),Validators.max(2024)]],
      typeInstallation:['', Validators.required],
      sourceAppro: ['', Validators.required],
      usageEauMesure:['', Validators.required],
      methodeMesure:['', Validators.required],
      consoEau:['', Validators.required],
      evolution:['', Validators.required],
      mesurePrise:['', Validators.required],
      facteurIncertitude:['', Validators.required],
      commentaire:['' ],
    });
  }



  addAction() {
    if (this.action.idSecteur == 0) {
      return
    }

    this.action.id = Math.floor(Math.random() * 1000)
    this.action.libelleSecteur = this.secteurs.find(x=>x.id == this.action.idSecteur)?.libelle;
    this.actionsService.addAction(this.action)
    this.action = {
      nom: '',
      idSecteur: 0,
      statut: 0
    }

    console.log(this.questBiodiversite);
    console.log(this.questConsoEau);

  }

  addIdQuestionBio() {
      if (this.questBiodiversite.id = 0 ) {
        this.questBiodiversite.id = Math.floor(Math.random() * 1000)
      }

      if (this.questBiodiversite.idAction = 0 && this.action.id) {
        this.questBiodiversite.idAction = this.action.id
      }
  }


  addIdQuestionConso() {
    if (this.questConsoEau.id = 0 ) {
      this.questConsoEau.id = Math.floor(Math.random() * 1000)
    }

    if (this.questConsoEau.idAction = 0 && this.action.id) {
      this.questConsoEau.idAction = this.action.id
    }
}
}
