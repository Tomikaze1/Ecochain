import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone:false,
})
export class SettingsPage implements OnInit {
  vehicleTypes = ['Sedan', 'Van', 'Pickup', 'Box Truck', 'Electric Van', 'Hybrid'];
  fuelTypes = ['Diesel', 'Unleaded Gasoline', 'LPG', 'CNG', 'Biodiesel', 'Electric', 'Hybrid'];
  fuelPrices: { [key: string]: number } = {
    Diesel: 62,
    'Unleaded Gasoline': 65.5,
    LPG: 47,
    CNG: 50,
    Biodiesel: 58,
    Electric: 10,
    Hybrid: 60
  };

  selectedVehicle = '';
  selectedFuel = '';
  fuelPrice = 0;

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    const settings = await this.storage.get('user-settings');
    if (settings) {
      this.selectedVehicle = settings.vehicle;
      this.selectedFuel = settings.fuel;
      this.fuelPrice = settings.price;
    }
  }

  onFuelChange() {
    this.fuelPrice = this.fuelPrices[this.selectedFuel];
  }

  async saveSettings() {
    await this.storage.set('user-settings', {
      vehicle: this.selectedVehicle,
      fuel: this.selectedFuel,
      price: this.fuelPrice
    });
    alert('Settings saved!');
  }

  toggleDark(event: any) {
    document.body.classList.toggle('dark', event.detail.checked);
  }
  
}
