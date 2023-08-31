import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts.component';
import { Route, RouterModule } from '@angular/router';
import { DictionaryTextsTableComponent } from './components/dictionary-texts-table/dictionary-texts-table.component';

const dictionaryTextsRoutes: Route[] = [
  {
    path: 'text/:id',
    component: TextsComponent,
  },
];

@NgModule({
  declarations: [
    TextsComponent,
    DictionaryTextsTableComponent,
    DictionaryTextsTableComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(dictionaryTextsRoutes)],
})
export class TextsModule {}
