import {Component} from '@angular/core';
import paths from 'src/config/routes';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-nest';
  pathToProfile: string = paths.pathToProfilePage;
}
