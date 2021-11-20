import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {HolderService} from "../../domain/service/holder.service";
import Swal from 'sweetalert2';
import {Holder} from "../../domain/model/holder";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogDescriptionComponent} from "./dialog-description/dialog-description.component";
import {MatSort} from "@angular/material/sort";
import {DataTableDataSource} from "./data-table-data-source";


@Component({
  selector: 'app-listagem-view',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'title', 'body', 'actions'];
  @ViewChild(MatPaginator) paginator;
  @ViewChild(MatSort) sort;
  dataSource: DataTableDataSource;

  constructor(private service: HolderService, private router: Router, private dialog: MatDialog) {  }


  ngOnInit(){
    // @ts-ignore
    this.service.getListagem().subscribe(response => {
      if (response.status == 200) {
        this.dataSource = new DataTableDataSource(this.paginator, this.sort, response.body)
      }
    });
  }


  public delete(holder: Holder){
    Swal.fire({
      icon: "question",
      title:"It's ok to exclusion?",
      text:"Are you have sure, to delete the information with id => " + holder.id +"?",
      showConfirmButton:true,
      confirmButtonText:'Sim',
      showCancelButton: true,
      cancelButtonText:'Não',
      focusCancel: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteItem(holder.id).subscribe(response => {
          if(response && response.status == 200){
            const index = this.dataSource.data.indexOf(holder)
            if(index > -1){
              Swal.fire('Data removed with success!', '', 'success')
              this.dataSource.data.splice(index, 1)
              this.dataSource = new DataTableDataSource(this.paginator, this.sort, this.dataSource.data)
            }

          }else{
            Swal.fire('Error to remove the information!', '', 'error')
          }
        });
      }
    });
  }

  goToNewHolder(){
    this.router.navigate(["cad"])
  }

  goToEdit(holder: Holder){
    // @ts-ignore
    this.router.navigate(["edit"], holder)
  }

  showDescription(holder: Holder){
    this.dialog.open(DialogDescriptionComponent, {
      data : holder
    });
  }

}
