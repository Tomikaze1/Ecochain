import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  standalone:false,
})
export class AchievementsPage implements OnInit {
  totalKm = 0;
  totalTrips = 0;
  totalEmissions = 0;
  badgeList: string[] = [];  

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    const trips = await this.storage.get('user-trips') || [];

    this.totalKm = trips.reduce((sum: number, t: any) => sum + t.distance, 0);
    this.totalEmissions = trips.reduce((sum: number, t: any) => sum + t.emissions, 0);
    this.totalTrips = trips.length;

    this.generateBadges();
  }

  generateBadges() {
    this.badgeList = [];

    if (this.totalKm >= 100) this.badgeList.push('🚗 100+ KM Driven');
    if (this.totalEmissions < 50 && this.totalTrips > 5) this.badgeList.push('🌱 Eco Saver');
    if (this.totalTrips >= 10) this.badgeList.push('🏁 Frequent Traveler');
    if (this.totalEmissions >= 100) this.badgeList.push('🌍 Heavy Duty Hauler');
    if (this.totalKm >= 500) this.badgeList.push('🛣️ Long Distance Pro');
  }
}
