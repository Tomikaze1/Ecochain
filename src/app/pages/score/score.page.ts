import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  standalone:false,
})
export class ScorePage implements OnInit {
  totalDistance = 0;
  totalEmissions = 0;
  efficiency = 0;
  rating = '';
  emoji = '';

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    const trips = await this.storage.get('user-trips') || [];

    this.totalDistance = trips.reduce((sum: number, t: any) => sum + t.distance, 0);
    this.totalEmissions = trips.reduce((sum: number, t: any) => sum + t.emissions, 0);

    this.efficiency = this.totalDistance > 0
      ? this.totalEmissions / this.totalDistance
      : 0;

    if (this.efficiency <= 0.15) {
      this.rating = 'Excellent'; this.emoji = '🌿';
    } else if (this.efficiency <= 0.25) {
      this.rating = 'Good'; this.emoji = '💚';
    } else if (this.efficiency <= 0.35) {
      this.rating = 'Moderate'; this.emoji = '⚠️';
    } else {
      this.rating = 'Poor'; this.emoji = '🛑';
    }
  }
}
