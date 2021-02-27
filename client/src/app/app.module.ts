import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryCache} from '@apollo/client/core';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {NewsDetailsPageComponent} from './pages/news-details-page/news-details-page.component';
import {SafeHtmlPipe} from './safe-html-pipe.pipe';
import {AddNewsPageComponent} from './pages/add-news-page/add-news-page.component';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    LoginPageComponent,
    FooterComponent,
    MainPageComponent,
    ProfilePageComponent,
    NewsPageComponent,
    NewsDetailsPageComponent,
    SafeHtmlPipe,
    AddNewsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    AngularEditorModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:5000/',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class AppModule {}
