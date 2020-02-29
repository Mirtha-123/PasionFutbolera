import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglasmiasPageRoutingModule } from './reglasmias-routing.module';

import { ReglasmiasPage } from './reglasmias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglasmiasPageRoutingModule
  ],
  declarations: [ReglasmiasPage]
})
export class ReglasmiasPageModule {}
