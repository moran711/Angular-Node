import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {LoginTabsComponent} from './login-tabs/login-tabs.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginTabsComponent},
  {
    path: '',
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
