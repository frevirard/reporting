import { Secteur } from "./secteur";

export interface Action {
  id?:number;
  nom:string;
  idSecteur?:number;
  libelleSecteur?:String;
  statut:number;
}
