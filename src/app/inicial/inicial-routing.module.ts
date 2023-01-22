import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './inicial.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: InicialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRoutingModule { }
