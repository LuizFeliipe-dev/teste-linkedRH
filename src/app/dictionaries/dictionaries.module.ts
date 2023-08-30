import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionariesComponent } from './dictionaries.component';
import { DictionariesTableComponent } from './dictionaries-table/dictionaries-table.component';
import {Route, RouterModule} from "@angular/router";

const dictionariesRoutes: Route[] = [
  {
    path: '',
    component: DictionariesComponent
  }
]

@NgModule({
  declarations: [DictionariesComponent, DictionariesTableComponent],
  imports: [CommonModule,
  RouterModule.forChild(dictionariesRoutes)],
})
export class DictionariesModule {}
