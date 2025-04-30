import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: false,
})
export class HomePage implements OnInit {
  username = '';
  recentTrip: any;
  totalEmissions = 0;

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    this.username = await this.storage.get('currentUser') || '';
    const trips = await this.storage.get('user-trips') || [];

    this.recentTrip = trips[trips.length - 1] || null;
    this.totalEmissions = trips.reduce((sum: number, t: any) => sum + t.emissions, 0);

    // Optional: trigger it on init
    this.scheduleTestNotification();
  }

  async scheduleTestNotification() {
    const perms = await LocalNotifications.requestPermissions();
    if (perms.display === 'granted') {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'EcoChain Alert',
            body: 'Your trip summary is ready!',
            id: 1,
            schedule: { at: new Date(Date.now() + 5000) },
          },
        ],
      });
    }
  }
}
