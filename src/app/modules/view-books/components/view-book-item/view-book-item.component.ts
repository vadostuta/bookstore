import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { models } from '@data/models';

@Component({
  selector: 'app-view-book-item',
  templateUrl: './view-book-item.component.html',
  styleUrls: ['./view-book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBookItemComponent implements OnInit {
  @Input() public readonly data: models.Book;
  @Output() public readonly handleEditEvent: EventEmitter<string> = new EventEmitter();
  @Output() public readonly handleDeleteEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public handleEdit(data: string): void {
    this.handleEditEvent.emit(data);
  }
  
  public handleDelete(data: string): void {
    this.handleDeleteEvent.emit(data);
  }

  ngOnInit(): void {
  }

}
