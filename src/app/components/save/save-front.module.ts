import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveFrontRoutingModule } from './save-front-routing.module';
import { SaveComponent } from './save.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SaveComponent
  ],
  imports: [
    CommonModule,
    SaveFrontRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SaveFrontModule { }
