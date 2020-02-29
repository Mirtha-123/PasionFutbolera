import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarreglaPageRoutingModule } from './editarregla-routing.module';

import { EditarreglaPage } from './editarregla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarreglaPageRoutingModule
  ],
  declarations: [EditarreglaPage]
})
export class EditarreglaPageModule {}
