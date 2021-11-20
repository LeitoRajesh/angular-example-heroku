import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list.component";

const routes: Routes = [{
  path: 'list-component', component: ListComponent
},{
  path: '',
  redirectTo: 'list-component',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListagemFrontRoutingModule { }
