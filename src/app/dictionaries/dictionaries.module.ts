import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionariesComponent } from './dictionaries.component';
import { DictionariesTableComponent } from './components/dictionaries-table/dictionaries-table.component';
import { Route, RouterModule } from '@angular/router';
import { ButtonCreateDictionaryComponent } from './components/button-create-dictionary/button-create-dictionary.component';
import { CreateDictionaryComponent } from './modals/create-dictionary/create-dictionary.component';
import { DeleteDictionaryComponent } from './modals/delete-dictionary/delete-dictionary.component';
import { FormsModule } from '@angular/forms';
import { EditDictionaryTextsModule } from '../edit-dictionary-texts/edit-dictionary-texts.module';
import { EditDictionaryComponent } from './modals/edit-dictionary/edit-dictionary.component';

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
    DeleteDictionaryComponent,
    EditDictionaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dictionariesRoutes),
    FormsModule,
    EditDictionaryTextsModule,
  ],
  providers: [],
})
export class DictionariesModule {}
