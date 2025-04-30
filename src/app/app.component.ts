import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Storage } from '@ionic/storage-angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: false,
})
export class AppComponent {
  constructor(private storage: Storage, private router: Router) {
    this.initStorage(); // ✅ Initialize storage first
  }

  async initStorage() {
    await this.storage.create(); // ✅ Required!
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

  async logout() {
    await this.storage.clear(); 
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
