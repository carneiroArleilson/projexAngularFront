import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoguinComponent} from './components/loguin/loguin.component'
import {HomeComponent} from './components/home/home.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/loguin',
    pathMatch: "full"
  },
  {
    path: 'loguin',
    component: LoguinComponent
  },
  {
    path: 'hom',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
