import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() public readonly name: string;
  @Input() public readonly skin: string;
  @Input() public readonly type: string;
  @Output() public readonly handleNewBookEvent: EventEmitter<null> = new EventEmitter();

  constructor() { }

  public handleNewBook(): void {
    this.handleNewBookEvent.emit();
  }

  public ngOnInit(): void {
  }

}
