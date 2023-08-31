import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EditDictionaryComponent } from './edit-dictionary.component';

const EditDictionaryRoutes: Route[] = [
  { path: '', component: EditDictionaryComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(EditDictionaryRoutes)],
})
export class EditDictionaryModule {}
