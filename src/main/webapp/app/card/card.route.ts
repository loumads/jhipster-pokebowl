import { Route } from '@angular/router';

import { CardComponent } from './card.component';

export const cardRoute: Route = {
  path: '',
  component: CardComponent,
  outlet: 'card',
};
