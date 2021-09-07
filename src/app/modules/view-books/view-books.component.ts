import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

import { models } from '@data/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBooksComponent implements OnInit {
  public data$: Observable<models.Book[]> = this._getData();

  constructor(
    private readonly _dataService: DataService,
    private readonly _router: Router
  ) { }

  trackByFn(index: number, item: string) {
    return item;
  }

  public handleEditEvent(id: string): void {
    this._router.navigate([`edit/${id}`])
  }

  public handleDeleteEvent(id: string): void {
    this._dataService.removeItem(id);
    // Note: dirty trick
    this.data$ = this._getData();
  }

  ngOnInit(): void {
  }

  private _getData(): Observable<models.Book[]> {
    return this._dataService.getData();
  }
}
