import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevametaPage } from './nuevameta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevametaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevametaPageRoutingModule {}
