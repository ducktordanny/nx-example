import {Component} from '@angular/core';

import {NxWelcomeComponent} from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'nx-example-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.scss'],
})
export class AppComponent {
  title = 'login';
}
