import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripEntryPage } from './trip-entry.page';

const routes: Routes = [
  {
    path: '',
    component: TripEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripEntryPageRoutingModule {}
