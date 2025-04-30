import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmissionsPageRoutingModule } from './emissions-routing.module';

import { EmissionsPage } from './emissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmissionsPageRoutingModule
  ],
  declarations: [EmissionsPage]
})
export class EmissionsPageModule {}
