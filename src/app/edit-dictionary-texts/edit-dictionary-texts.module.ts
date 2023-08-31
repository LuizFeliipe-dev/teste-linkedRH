import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EditDictionaryTextsComponent } from './edit-dictionary-texts.component';
import { EditDictionaryTextsTableComponent } from './components/edit-dictionary-texts-table/edit-dictionary-texts-table.component';
import { ButtonAddTextsComponent } from './components/button-add-texts/button-add-texts.component';
import { AddTextsComponent } from './modals/add-texts/add-texts.component';
import { EditTextsComponent } from './modals/edit-texts/edit-texts.component';

const EditDictionaryRoutes: Route[] = [
  { path: 'dictionary-texts/:id', component: EditDictionaryTextsComponent },
];

@NgModule({
  declarations: [
    EditDictionaryTextsComponent,
    EditDictionaryTextsTableComponent,
    ButtonAddTextsComponent,
    AddTextsComponent,
    EditTextsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(EditDictionaryRoutes)],
  exports: [ButtonAddTextsComponent, EditDictionaryTextsTableComponent],
})
export class EditDictionaryTextsModule {}
