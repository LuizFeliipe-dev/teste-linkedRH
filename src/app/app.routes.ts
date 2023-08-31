import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./dictionaries/dictionaries.module').then(
        (m) => m.DictionariesModule
      ),
  },
  {
    path: 'dictionary-texts/:id',
    loadChildren: () =>
      import('./edit-dictionary-texts/edit-dictionary-texts.module').then(
        (m) => m.EditDictionaryTextsModule
      ),
  },
  {
    path: 'texts/:id',
    loadChildren: () =>
      import('./texts/texts.module').then(
        (m) => m.TextsModule
      ),
  },
];
