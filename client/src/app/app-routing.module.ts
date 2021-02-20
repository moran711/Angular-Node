import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import paths from 'src/config/routes';
import {AuthGuard} from './auth/auth.guard';
import {LoginTabsComponent} from './login-tabs/login-tabs.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: paths.pathToLoginPage.replace('/', ''), component: LoginTabsComponent},
  {
    path: paths.pathToMainPage.replace('/', ''),
    canActivate: [AuthGuard],
    component: MainPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
