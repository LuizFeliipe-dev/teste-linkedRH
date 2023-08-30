import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryTextsComponent } from './dictionary-texts.component';
import { Route, RouterModule } from '@angular/router';
import { DictionaryTextsTableComponent } from './components/dictionary-texts-table/dictionary-texts-table.component';

const dictionaryTextsRoutes: Route[] = [
  {
    path: '',
    component: DictionaryTextsComponent,
  },
];

@NgModule({
  declarations: [
    DictionaryTextsComponent,
    DictionaryTextsTableComponent,
    DictionaryTextsTableComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(dictionaryTextsRoutes)],
})
export class DictionaryTextsModule {}
