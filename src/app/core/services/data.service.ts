import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { models } from '@data/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data(): models.Book[] {
    return JSON.parse(localStorage.getItem('data'));
  }

  constructor() { }

  public getData(): Observable<models.Book[]> {
    return of(JSON.parse(localStorage.getItem('data')));
  }

  public getBookById(bookId: string): models.Book {
    return this._data().find(({ id }) => id === bookId);
  }

  public addItem(data: models.Book): void {
    if (!data) {
      return;
    }

    const currentStore = this._data() || [];

    const updatedStore = [...currentStore, {...data, id: this._randomBookId()}];

    localStorage.setItem('data', JSON.stringify(updatedStore));
  }

  public editItem(data: models.Book): void {
    // Note: this could be improved to not setting a new object, but just with replacing needed one
    const currentStore = this._data();
    const updatedStore = currentStore.map(book => book.id === data.id ? data : book);

    localStorage.setItem('data', JSON.stringify(updatedStore));
  }

  public removeItem(bookId: string): void {
    const currentStore = this._data();
    const updatedStore = currentStore.filter(({ id }) => id !== bookId);

    localStorage.setItem('data', JSON.stringify(updatedStore));
  }

  private _randomBookId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
