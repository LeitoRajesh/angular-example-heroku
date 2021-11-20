import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: "index",
    loadChildren: () => import('./components/list/listagem-front.module').then(module => module.ListagemFrontModule)
  },{
    path: "cad",
    loadChildren: () => import("./components/save/save-front.module").then(module => module.SaveFrontModule)
  },{
    path: "edit",
    loadChildren: () => import("./components/edit/edit.module").then(module => module.EditModule)
  },{
  path: '',
  redirectTo: 'index',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
