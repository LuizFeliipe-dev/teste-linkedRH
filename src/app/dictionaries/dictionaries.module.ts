import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionariesComponent } from './dictionaries.component';
import { DictionariesTableComponent } from './components/dictionaries-table/dictionaries-table.component';
import { Route, RouterModule } from '@angular/router';
import { ButtonCreateDictionaryComponent } from './components/button-create-dictionary/button-create-dictionary.component';
import { CreateDictionaryComponent } from './modals/create-dictionary/create-dictionary.component';
import { EditDictionaryComponent } from './modals/edit-dictionary/edit-dictionary.component';
import { DeleteDictionaryComponent } from './modals/delete-dictionary/delete-dictionary.component';
import { NbCardModule, NbDialogModule, NbDialogService } from '@nebular/theme';

const dictionariesRoutes: Route[] = [
  {
    path: '',
    component: DictionariesComponent,
  },
];

@NgModule({
  declarations: [
    DictionariesComponent,
    DictionariesTableComponent,
    ButtonCreateDictionaryComponent,
    CreateDictionaryComponent,
    EditDictionaryComponent,
    DeleteDictionaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dictionariesRoutes),
    NbCardModule,
    NbDialogModule.forChild(),
  ],
  providers: [NbDialogService],
})
export class DictionariesModule {}
