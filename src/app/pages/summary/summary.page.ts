import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  standalone:false,
})
export class SummaryPage implements OnInit {
  trip: any = null;
  fuelCost = 0;
  fuelEfficiency = 10; 

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    this.trip = await this.storage.get('latestTrip');
    const settings = await this.storage.get('user-settings');

    if (this.trip && settings) {
      this.fuelCost = (this.trip.distance / this.fuelEfficiency) * settings.price;
    }
  }
}
