import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBookRoutingModule } from './edit-book-routing.module';
import { EditBookComponent } from './edit-book.component';
import { BookFormModule } from 'src/app/shared/components/book-form/book-form.module';


@NgModule({
  declarations: [EditBookComponent],
  imports: [
    CommonModule,
    EditBookRoutingModule,
    BookFormModule
  ]
})
export class EditBookModule { }
