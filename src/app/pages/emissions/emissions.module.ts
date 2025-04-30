import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { EmissionsPageRoutingModule } from './emissions-routing.module';

import { EmissionsPage } from './emissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmissionsPageRoutingModule,
    NgChartsModule
  ],
  declarations: [EmissionsPage]
})
export class EmissionsPageModule {}
