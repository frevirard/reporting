import { Secteur } from './../../DAO/secteur';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import secteurs from './../../jsonData/secteur.json';
import { Action } from 'src/app/DAO/action';
import { Biodiversite } from 'src/app/DAO/biodiversite';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  secteurs:Secteur[] = []
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
    commentaire:['', Validators.required],
  });


  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]

  });


  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    this.secteurs = secteurs

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
      commentaire:['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  test() {
    console.log(this.action);
  }
}
