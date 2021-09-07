import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookComponent } from './add-book.component';
import { BookFormModule } from 'src/app/shared/components/book-form/book-form.module';

@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule,
    AddBookRoutingModule,
    BookFormModule
  ]
})
export class AddBookModule { }
