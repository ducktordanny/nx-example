import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NxWelcomeComponent} from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-example-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.scss'],
})
export class AppComponent {
  title = 'manage';
}
