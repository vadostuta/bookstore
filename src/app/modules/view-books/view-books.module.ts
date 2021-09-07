import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBooksRoutingModule } from './view-books-routing.module';
import { ViewBooksComponent } from './view-books.component';
import {MatCardModule} from '@angular/material/card';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ViewBookItemComponent } from './components/view-book-item/view-book-item.component';


@NgModule({
  declarations: [ViewBooksComponent, ViewBookItemComponent],
  imports: [
    CommonModule,
    ViewBooksRoutingModule,
    MatCardModule,
    ButtonModule
  ]
})
export class ViewBooksModule { }
