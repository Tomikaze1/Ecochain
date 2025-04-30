import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripEntryPageRoutingModule } from './trip-entry-routing.module';

import { TripEntryPage } from './trip-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripEntryPageRoutingModule
  ],
  declarations: [TripEntryPage]
})
export class TripEntryPageModule {}
