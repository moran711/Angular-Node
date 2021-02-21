import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import paths from 'src/config/routes';
import {AuthGuard} from './auth/auth.guard';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {NewsDetailsPageComponent} from './news-details-page/news-details-page.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const routes: Routes = [
  {path: paths.pathToLoginPage.slice(1), component: LoginPageComponent},
  {
    path: paths.pathToMainPage.slice(1),
    canActivate: [AuthGuard],
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: paths.pathToProfilePage.slice(1),
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: paths.pathToNewsPage.slice(1),
    component: NewsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: paths.pathToNewsDetailsPage.slice(1),
    canActivate: [AuthGuard],
    component: NewsDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
