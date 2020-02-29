import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmetaPageRoutingModule } from './editarmeta-routing.module';

import { EditarmetaPage } from './editarmeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarmetaPageRoutingModule
  ],
  declarations: [EditarmetaPage]
})
export class EditarmetaPageModule {}
