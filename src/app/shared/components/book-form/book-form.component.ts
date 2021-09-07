import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { models } from 'src/app/data/models';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent implements OnInit {
  @Input() public readonly parent: FormGroup;
  @Output() public readonly handleSubmitEvent: EventEmitter<null> = new EventEmitter();

  constructor() { }

  public saveBook(): void {
    this.handleSubmitEvent.emit();
  }

  ngOnInit(): void {
  }

}
