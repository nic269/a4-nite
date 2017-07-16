import { AppComponent } from './app.component';
import { CardListComponent } from './card-list';
import { CardDetailComponent } from './card-detail';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  CardListComponent,
  CardDetailComponent,
  HomeComponent,
  // AboutComponent,
  NoContentComponent
];

export * from './app.component';
export * from './card-list';
export * from './card-detail';
export * from './home';
export * from './about';
export * from './no-content';
export * from './home/x-large';
