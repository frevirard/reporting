import { Component, OnInit } from '@angular/core';
import actions from './../../jsonData/listeActions.json'
import { Action } from 'src/app/DAO/action';

@Component({
  selector: 'app-liste-actions',
  templateUrl: './liste-actions.component.html',
  styleUrls: ['./liste-actions.component.scss']
})
export class ListeActionsComponent implements OnInit {


  searchvalue:string = ""
  actions:Action[] = []
  dataSource = actions;
  columnsToDisplay = ['nom', 'secteur', 'statut', 'modifier'];


  constructor() { }

  ngOnInit(): void {
    this.actions = actions
  }


   myFunction() {
    // var input, filter, table, tr, td, i, txtValue;
    // input = document.getElementById("myInput");
    // filter = this.searchvalue.toUpperCase();
    // table = document.getElementById("myTable");
    // tr = table?.getElementsByTagName("tr");
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[0];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }
    // }
    console.log(this.searchvalue);
  }
}
