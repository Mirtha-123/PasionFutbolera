import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevametaPageRoutingModule } from './nuevameta-routing.module';

import { NuevametaPage } from './nuevameta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevametaPageRoutingModule
  ],
  declarations: [NuevametaPage]
})
export class NuevametaPageModule {}
