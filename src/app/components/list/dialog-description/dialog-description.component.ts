import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Holder} from "../../../domain/model/holder";

@Component({
  selector: 'app-dialog-description',
  templateUrl: './dialog-description.component.html',
  styleUrls: ['./dialog-description.component.scss']
})
export class DialogDescriptionComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Holder, public dialogRef: MatDialogRef<DialogDescriptionComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
