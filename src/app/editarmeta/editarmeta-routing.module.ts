import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarmetaPage } from './editarmeta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarmetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarmetaPageRoutingModule {}
