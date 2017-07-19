import { Routes } from '@angular/router';
import {
  CardListComponent,
  CardDetailComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  AboutComponent,
  NoContentComponent
} from '@Components';
import { AuthGuard } from './services';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'home',  component: HomeComponent },
  {
    path: 'cards',
    component: CardListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cards/:id',
    component: CardDetailComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // { path: 'about', component: AboutComponent },
  // { path: 'detail', loadChildren: './components/+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './components/+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
