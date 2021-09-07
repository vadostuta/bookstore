import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { models } from '@data/models';
import { markAsDirtyAndValidate } from 'src/app/core/utils/forms.util';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBookComponent implements OnInit {
  public editBookForm: FormGroup;

  private _bookId: string;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _dataService: DataService
  ) {
    this.editBookForm = this._fb.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  public editNewBook(): void {
    markAsDirtyAndValidate(this.editBookForm);

    if (this.editBookForm.invalid) {
      return;
    }

    const context: models.Book = this.editBookForm.getRawValue();
    
    this._dataService.editItem({...context, id: this._bookId});

    this._router.navigate(['view']);
  }

  ngOnInit(): void {
    this._bookId = this._activatedRoute.snapshot.paramMap.get('id');

    this._handleEditData(this._bookId);
  }

  private _handleEditData(bookId: string): void {
    const data = this._dataService.getBookById(bookId);
    this.editBookForm.patchValue(data);
  }

}
