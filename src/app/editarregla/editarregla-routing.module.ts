import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarreglaPage } from './editarregla.page';

const routes: Routes = [
  {
    path: '',
    component: EditarreglaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarreglaPageRoutingModule {}
