import { DialogComponentComponent } from './../dialog-component/dialog-component.component';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import actions from './../../jsonData/listeActions.json'
import { Action } from 'src/app/DAO/action';
import { ActionsService } from 'src/app/mesServices/actionServices/actions.service';
import { Router, RouterModule } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-liste-actions',
  templateUrl: './liste-actions.component.html',
  styleUrls: ['./liste-actions.component.scss']
})
export class ListeActionsComponent implements OnInit,OnChanges {


  searchvalue:string = ""
  actions:Action[] = []
  dataSource = actions;
  columnsToDisplay = ['nom', 'secteur', 'statut', 'Consulter','Modifier'];


  constructor(private actionsSevice:ActionsService, private router:Router,public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.actions = this.actionsSevice.getAction();
  }



  openDialog(action:Action) {
    const dialogRef = this.dialog.open(DialogComponentComponent,{
      data: action,
   });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
