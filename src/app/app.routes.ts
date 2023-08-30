import { Route } from '@angular/router';
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'dictionaries',
        loadChildren: () => import('./dictionaries/dictionaries.module').then((m) => m.DictionariesModule)
    }
];
