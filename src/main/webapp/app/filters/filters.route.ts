import { Route } from '@angular/router';

import { FiltersComponent } from './filters.component';

export const filtersRoute: Route = {
  path: '',
  component: FiltersComponent,
  outlet: 'filters',
};
