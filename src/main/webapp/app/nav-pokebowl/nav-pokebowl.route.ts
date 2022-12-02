import { Route } from '@angular/router';

import { NavPokebowlComponent } from './nav-pokebowl.component';

export const navPokebowlRoute: Route = {
  path: '',
  component: NavPokebowlComponent,
  outlet: 'navpokebowl',
};
