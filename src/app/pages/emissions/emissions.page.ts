import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.page.html',
  standalone:false,
})
export class EmissionsPage implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartLabels: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public barChartData: number[] = new Array(7).fill(0);

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    const trips = await this.storage.get('user-trips') || [];

    const now = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 6);

    for (const trip of trips) {
      const tripDate = new Date(trip.date);
      if (tripDate >= oneWeekAgo && tripDate <= now) {
        const dayIndex = tripDate.getDay(); 
        this.barChartData[dayIndex] += trip.emissions;
      }
    }

    
    this.barChartData = this.barChartData.map(e => Math.round(e * 100) / 100);
  }
}
