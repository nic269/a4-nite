import { Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  NoContentComponent
} from '@Components';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './components/+detail#DetailModule'},
  { path: 'barrel', loadChildren: './components/+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
