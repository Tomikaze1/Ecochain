import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone:false,
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private storage: StorageService, private router: Router) {}

  async ngOnInit() {
    const currentUser = await this.storage.get('currentUser');
    if (currentUser) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  async login() {
    const user = await this.storage.get(`user-${this.email}`);
    if (user && user.password === this.password) {
      await this.storage.set('currentUser', this.email);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  }

  async register() {
    const exists = await this.storage.get(`user-${this.email}`);
    if (exists) return alert('User already exists');
    await this.storage.set(`user-${this.email}`, { email: this.email, password: this.password });
    alert('Registered! Please log in.');
  }
}
