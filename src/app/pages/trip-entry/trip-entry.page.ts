import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-trip-entry',
  templateUrl: './trip-entry.page.html',
  standalone:false,
})
export class TripEntryPage {
  distance = 0; 
  startCoords: any = {};
  co2Emitted: number | null = null;

  constructor(
    private api: ApiService,
    private storage: StorageService
  ) {}

  async getCurrentLocation() {
    const coords = await Geolocation.getCurrentPosition();
    this.startCoords = {
      lat: coords.coords.latitude,
      lon: coords.coords.longitude
    };
  }

  async submitTrip() {
    const settings = await this.storage.get('user-settings');
    if (!settings || !this.distance) {
      alert('Missing vehicle settings or distance');
      return;
    }

    const result = await this.api.getEmissionEstimate(
      settings.fuel,
      this.distance
    );

    this.co2Emitted = result;

    const trip = {
      date: new Date().toISOString(),
      distance: this.distance,
      emissions: result,
      fuel: settings.fuel,
      location: this.startCoords
    };

    const allTrips = await this.storage.get('user-trips') || [];
    allTrips.push(trip);
    await this.storage.set('user-trips', allTrips);
    await this.storage.set('latestTrip', trip);

    alert('Trip recorded with estimated emissions!');
  }
}
