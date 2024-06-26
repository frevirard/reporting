import { GesService } from './../../mesServices/gesService/ges.service';
import { ConsoEauService } from './../../mesServices/consoEau/conso-eau.service';
import { Secteur } from './../../DAO/secteur';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import secteurs from './../../jsonData/secteur.json';
import { Action } from 'src/app/DAO/action';
import { Biodiversite } from 'src/app/DAO/biodiversite';
import listeactions from  './../../jsonData/listeActions.json';
import { ActionsService } from 'src/app/mesServices/actionServices/actions.service';
import { ConsoEau } from 'src/app/DAO/consoEau';
import { Ges } from 'src/app/DAO/ges';
import { BiodiversiteServiceService } from 'src/app/mesServices/biodiversiteService/biodiversite-service.service';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit, OnDestroy {

  secteurs:Secteur[] = []
  listeActions: Action[] = []
  action:Action = {
    id:0,
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

  questGES:Ges = {
    id: 0,
    idAction: 0,
    anneeReference: 0,
    porteeEmission: '',
    catEmission: '',
    ordreGrandeur: '',
    categorie: '',
    methCalcul: '',
    precisionMethCalcul: '',
    facteurIncertitude: '',
    commRemarqueAdditionnelles: ''
  }

  firstFormGroup = this._formBuilder.group({
    nom: ['', Validators.required],
    idSecteur: ['', Validators.required]
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

  fourthFormGroup = this._formBuilder.group({
    anneeReference: ['', [Validators.maxLength(4),Validators.min(2000),Validators.max(2024)]],
    porteeEmission:['', Validators.required],
    catEmission: ['', Validators.required],
    ordreGrandeur:['', Validators.required],
    categorie:['', Validators.required],
    methCalcul:['', Validators.required],
    precisionMethCalcul:['', Validators.required],
    facteurIncertitude:['', Validators.required],
    commRemarqueAdditionnelles:['', Validators.required],

  });


  isOptional = false;
  notOptional = true;

  constructor(private _formBuilder: FormBuilder, private actionsService: ActionsService,
    private bioDiversiteService:BiodiversiteServiceService
    ,private consoEauService:ConsoEauService, private questGestService:GesService) {}
  ngOnDestroy(): void {
    this.actionsService.resetPasseAction();

    // throw new Error('Method not implemented.');
  }

  ngOnInit() {

    this.secteurs = secteurs
    this.listeActions = listeactions;
    this.action = this.actionsService.passedAction!;
    if(this.bioDiversiteService.findBioById(this.action.id!)) {
      this.questBiodiversite = this.bioDiversiteService.findBioById(this.action.id!)!;
    }

    if(this.consoEauService.findConsoById(this.action.id!)) {
      this.questConsoEau = this.consoEauService.findConsoById(this.action.id!)!
    };

    if(this.questGestService.findGesById(this.action.id!)) {
      this.questGES = this.questGestService.findGesById(this.action.id!)!;
    }

    this.firstFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
       idSecteur: ['', Validators.required]
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

     this.fourthFormGroup = this._formBuilder.group({
       anneeReference: ['', [Validators.maxLength(4),Validators.min(2000),Validators.max(2024)]],
       porteeEmission:['', Validators.required],
       catEmission: ['', Validators.required],
       ordreGrandeur:['', Validators.required],
       categorie:['', Validators.required],
       methCalcul:['', Validators.required],
       precisionMethCalcul:['', Validators.required],
       facteurIncertitude:['', Validators.required],
       commRemarqueAdditionnelles:['']

     });
  }



  addAction() {

    if(this.action.id === 0 ) {
      this.action.id = Math.floor(Math.random() * 50000)
    } else {

    }
    this.action.libelleSecteur = this.secteurs.find(x=>x.id == this.action.idSecteur)?.libelle;
    this.action.notation = "BB"
    this.actionsService.addAction(this.action)


    this.questBiodiversite.idAction = this.action.id!;
    this.questConsoEau.idAction = this.action.id!;
    this.questGES.idAction = this.action.id!;


    this.bioDiversiteService.addBiodiversite(this.questBiodiversite);
    this.consoEauService.addConso(this.questConsoEau);
    this.questGestService.addquesGes(this.questGES);

    this.action = {
      id:0,
      nom: '',
      idSecteur: 0,
      statut: 0
    }


    // Penser à mettre en place les modif

  }

  addIdQuestionBio() {
      if (this.questBiodiversite.id === 0 ) {
        this.questBiodiversite.id = Math.floor(Math.random() * 50000)
      };

      if (this.questBiodiversite.idAction === 0 && this.action.id) {
        this.questBiodiversite.idAction = this.action.id
      };

  }


  addIdQuestionConso() {
    if (this.questConsoEau.id === 0 ) {
      this.questConsoEau.id = Math.floor(Math.random() * 50000)
    }

    if (this.questConsoEau.idAction === 0 && this.action.id) {
      this.questConsoEau.idAction = this.action.id
    }


}

addIdQuestionGes() {
  if (this.questGES.id === 0 ) {
    this.questGES.id = Math.floor(Math.random() * 50000)
  }

  this.addAction()
}
}
