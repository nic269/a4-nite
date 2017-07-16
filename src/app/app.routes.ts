import { Routes } from '@angular/router';
import {
  CardListComponent,
  CardDetailComponent,
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
  { path: 'cards', component: CardListComponent},
  { path: 'cards/:id', component: CardDetailComponent},
  // { path: 'about', component: AboutComponent },
  // { path: 'detail', loadChildren: './components/+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './components/+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
