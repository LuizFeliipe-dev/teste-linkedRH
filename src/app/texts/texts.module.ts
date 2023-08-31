import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts.component';
import { Route, RouterModule } from '@angular/router';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ViewTextComponent } from './modals/view-text/view-text.component';

const dictionaryTextsRoutes: Route[] = [
  {
    path: '',
    component: TextsComponent,
  },
];

@NgModule({
  declarations: [
    TextsComponent,
    ViewTextComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dictionaryTextsRoutes),
    PaginatorComponent,
  ],
})
export class TextsModule {}
