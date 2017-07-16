import { Routes } from '@angular/router';
import {
  CardListComponent,
  CardDetailComponent,
  LoginComponent,
  HomeComponent,
  AboutComponent,
  NoContentComponent
} from '@Components';
import { AuthGuard } from './services';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',  component: HomeComponent },
  {
    path: 'cards',
    component: CardListComponent,
    canActivate: [AuthGuard]
  },
  { path: 'cards/:id', component: CardDetailComponent},
  { path: 'login', component: LoginComponent},
  // { path: 'about', component: AboutComponent },
  // { path: 'detail', loadChildren: './components/+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './components/+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
