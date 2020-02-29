import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalPageModule} from './modal/modal.module'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modalese/:papa',
    loadChildren: () => import('./modalese/modalese.module').then( m => m.ModalesePageModule)
  },
  {
    path: 'nuevameta',
    loadChildren: () => import('./nuevameta/nuevameta.module').then( m => m.NuevametaPageModule)
  },
  {
    path: 'editarmeta/:papi',
    loadChildren: () => import('./editarmeta/editarmeta.module').then( m => m.EditarmetaPageModule)
  },
  {
    path: 'reglasmias/:dame',
    loadChildren: () => import('./reglasmias/reglasmias.module').then( m => m.ReglasmiasPageModule)
  },
  {
    path: 'editarregla/:regla',
    loadChildren: () => import('./editarregla/editarregla.module').then( m => m.EditarreglaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
