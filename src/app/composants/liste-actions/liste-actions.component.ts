import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import actions from './../../jsonData/listeActions.json'
import { Action } from 'src/app/DAO/action';
import { ActionsService } from 'src/app/mesServices/actionServices/actions.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-actions',
  templateUrl: './liste-actions.component.html',
  styleUrls: ['./liste-actions.component.scss']
})
export class ListeActionsComponent implements OnInit,OnChanges {


  searchvalue:string = ""
  actions:Action[] = []
  dataSource = actions;
  columnsToDisplay = ['nom', 'secteur', 'statut', 'Consulter'];


  constructor(private actionsSevice:ActionsService, private router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.actions = this.actionsSevice.getAction();
  }


   myFunction() {
     var input, filter, table, tr, td, i, txtValue;
    //  input = document.getElementById("myInput");
    input = this.searchvalue;
     filter = this.searchvalue.toUpperCase();
     table = document.getElementById("myTable");
    tr = table?.getElementsByTagName("tr");
     for (i = 0; i < tr!.length; i++) {
       td = tr![i].getElementsByTagName("td")[0];
       if (td && tr) {
         txtValue = td.textContent || td.innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
           tr[i].style.display = "";
         } else {
           tr[i].style.display = "none";
         }
       }
     }
  }

  modifier(element:Action) {
      console.log(element);
      this.actionsSevice.passAction(element);
      this.router.navigateByUrl("affichageActions/actions")
    }

}
