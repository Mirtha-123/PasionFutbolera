import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalesePageRoutingModule } from './modalese-routing.module';

import { ModalesePage } from './modalese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalesePageRoutingModule
  ],
  declarations: [ModalesePage]
})
export class ModalesePageModule {}
