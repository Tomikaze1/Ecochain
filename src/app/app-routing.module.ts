import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'score',
    loadChildren: () => import('./pages/score/score.module').then(m => m.ScorePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'emissions',
    loadChildren: () => import('./pages/emissions/emissions.module').then(m => m.EmissionsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then(m => m.AchievementsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trip-entry',
    loadChildren: () => import('./pages/trip-entry/trip-entry.module').then(m => m.TripEntryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
