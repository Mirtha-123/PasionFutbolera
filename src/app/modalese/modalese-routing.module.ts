import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalesePage } from './modalese.page';

const routes: Routes = [
  {
    path: '',
    component: ModalesePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalesePageRoutingModule {}
