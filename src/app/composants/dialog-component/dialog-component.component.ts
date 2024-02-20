import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Action } from 'src/app/DAO/action';
import { Biodiversite } from 'src/app/DAO/biodiversite';
import { ConsoEau } from 'src/app/DAO/consoEau';
import { BiodiversiteServiceService } from 'src/app/mesServices/biodiversiteService/biodiversite-service.service';
import { ConsoEauService } from 'src/app/mesServices/consoEau/conso-eau.service';
import { GesService } from 'src/app/mesServices/gesService/ges.service';
import { Ges } from 'src/app/DAO/ges';


@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {

  questBio:Biodiversite = {
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

  questEau:ConsoEau = {
    id: 0,
    idAction: 0,
    anneeReference: 0,
    typeInstallation: '',
    sourceAppro: '',
    usageEauMesure: '',
    methodeMesure: '',
    consoEau: '',
    evolution: '',
    mesurePrise: '',
    facteurIncertitude: '',
    commentaire: ''
  }

  questGest:Ges = {
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

  constructor( @Inject(MAT_DIALOG_DATA) public data: Action,private bioDiversiteService:BiodiversiteServiceService
  ,private consoEauService:ConsoEauService, private questGestService:GesService) { }


  ngOnInit(): void {
    console.log(this.data);
    this.questBio = this.bioDiversiteService.findBioById(this.data.id!)!;
  }

}
