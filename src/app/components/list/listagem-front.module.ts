import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemFrontRoutingModule } from './listagem-front-routing.module';
import { ListComponent } from './list.component';
import { MatTableModule} from "@angular/material/table";
import { MatCardModule} from "@angular/material/card";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatTooltipModule} from "@angular/material/tooltip";
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatDialogModule} from "@angular/material/dialog";
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { DialogDescriptionComponent } from './dialog-description/dialog-description.component';
import { MatSortModule} from "@angular/material/sort";
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    ListComponent,
    DialogDescriptionComponent
  ],
  imports: [
    CommonModule,
    ListagemFrontRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSortModule,
    MatDividerModule
  ]
})
export class ListagemFrontModule { }
