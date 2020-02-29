import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReglasmiasPage } from './reglasmias.page';

const routes: Routes = [
  {
    path: '',
    component: ReglasmiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReglasmiasPageRoutingModule {}
