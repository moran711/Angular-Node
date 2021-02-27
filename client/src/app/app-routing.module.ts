import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import paths from 'src/config/routes';
import {AddNewsPageComponent} from './pages/add-news-page/add-news-page.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {NewsDetailsPageComponent} from './pages/news-details-page/news-details-page.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';

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
  {
    path: paths.pathToNewsAddPage.slice(1),
    canActivate: [AuthGuard],
    component: AddNewsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
