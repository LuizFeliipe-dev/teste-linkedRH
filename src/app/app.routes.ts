import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./dictionaries/dictionaries.module').then((m) => m.DictionariesModule)
    },
    {
        path: 'texts/:id',
        loadChildren: () => import('./dictionary-texts/dictionary-texts.module').then((m) => m.DictionaryTextsModule)
    }
];
