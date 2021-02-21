import {Component} from '@angular/core';
import paths from 'src/config/routes';

interface IMenuItems {
  avatar: string;
  route: string;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems: IMenuItems[] = [
    {avatar: 'home', route: paths.pathToMainPage, title: 'Home'},
    {avatar: 'feed', route: paths.pathToNewsPage, title: 'News'},
  ];
  title: string = 'angular-nest';
  pathToProfile: string = paths.pathToProfilePage;
}
