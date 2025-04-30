  import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouteReuseStrategy } from '@angular/router';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
  import { NgChartsModule } from 'ng2-charts';
  import { StorageService } from './services/storage.service';  
  import { IonicStorageModule } from '@ionic/storage-angular';
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(),  IonicStorageModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, NgChartsModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StorageService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class AppModule {}
