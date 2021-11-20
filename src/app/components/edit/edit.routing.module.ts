import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from "./edit.component";

const routes: Routes = [{
  path: 'edit-holder', component: EditComponent
},{
  path: '',
  redirectTo: 'edit-holder',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
