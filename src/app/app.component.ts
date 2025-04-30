import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.scheduleLocalNotification();
  }

  async scheduleLocalNotification() {
    const perms = await LocalNotifications.requestPermissions();
    if (perms.display === 'granted') {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'EcoChain Alert',
            body: 'Local notification test ✅',
            id: 1,
            schedule: { at: new Date(Date.now() + 5000) },
          },
        ],
      });
    }
  }
}
