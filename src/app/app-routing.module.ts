import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('./pages/score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'emissions',
    loadChildren: () => import('./pages/emissions/emissions.module').then( m => m.EmissionsPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'trip-entry',
    loadChildren: () => import('./pages/trip-entry/trip-entry.module').then( m => m.TripEntryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
