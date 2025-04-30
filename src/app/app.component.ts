import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone:false,
})
export class AppComponent {
  constructor() {
    this.registerPush();
  }

  registerPush() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener('registration', token => {
      console.log('Push token:', token.value);
    });

    PushNotifications.addListener('pushNotificationReceived', notification => {
      alert('🔔 Notification: ' + notification.title);
    });
  }
}
