import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { markAsDirtyAndValidate } from 'src/app/core/utils/forms.util';
import { models } from '@data/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {
  public addBookForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _dataService: DataService,
    private readonly _router: Router
  ) {
    this.addBookForm = this._fb.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  public saveNewBook(): void {
    markAsDirtyAndValidate(this.addBookForm);

    if (this.addBookForm.invalid) {
      return;
    }

    const context: models.Book = this.addBookForm.getRawValue();
    
    this._dataService.addItem(context);

    this.addBookForm.reset();
    this._router.navigate(['view']);
  }

  ngOnInit(): void {
  }

}
