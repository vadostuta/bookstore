import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    private readonly _router: Router
  ) {}

  public handleHomeRedirect(): void {
    this._router.navigate(['']);
  }

  public handleNewBookEvent(): void {
    this._router.navigate(['/add']);
  }


}
