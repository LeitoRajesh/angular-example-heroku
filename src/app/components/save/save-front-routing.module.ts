import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaveComponent} from "./save.component";

const routes: Routes = [{
  path: 'save-holder', component: SaveComponent
},{
  path: '',
  redirectTo: 'save-holder',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveFrontRoutingModule { }
