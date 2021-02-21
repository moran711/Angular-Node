import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import paths from 'src/config/routes';
import {AuthGuard} from './auth/auth.guard';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const routes: Routes = [
  {path: paths.pathToLoginPage.replace('/', ''), component: LoginPageComponent},
  {
    path: paths.pathToMainPage.replace('/', ''),
    canActivate: [AuthGuard],
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: paths.pathToProfilePage.replace('/', ''),
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
