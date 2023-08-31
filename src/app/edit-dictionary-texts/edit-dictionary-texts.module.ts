import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EditDictionaryTextsComponent } from './edit-dictionary-texts.component';
import { EditDictionaryTextsTableComponent } from './components/edit-dictionary-texts-table/edit-dictionary-texts-table.component';
import { ButtonAddTextsComponent } from './components/button-add-texts/button-add-texts.component';
import { AddTextsComponent } from './modals/add-texts/add-texts.component';
import { EditTextsComponent } from './modals/edit-texts/edit-texts.component';
import { DeleteTextsComponent } from './modals/delete-texts/delete-texts.component';
import { FormsModule } from '@angular/forms';
import {PaginatorComponent} from "../../components/paginator/paginator.component";

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
    DeleteTextsComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(EditDictionaryRoutes),
        FormsModule,
        PaginatorComponent,
    ],
  exports: [ButtonAddTextsComponent, EditDictionaryTextsTableComponent],
})
export class EditDictionaryTextsModule {}
