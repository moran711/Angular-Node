import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import regexps from 'src/config/regexps';
import snackbarMessages from 'src/config/snackbarMessages';
import {setToLocalStorage} from 'src/utils/localStorage';
import {LOGIN_USER} from '../../graphql/user.graphql';

export interface ILoginedUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  credential: string;
  token: string;
}

export interface ILoginedUserRes {
  loginUser: ILoginedUser;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(
    private apollo: Apollo,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(regexps.email),
      ]),
    });
  }

  hide: boolean = true;
  onSubmit() {
    this.apollo
      .mutate<ILoginedUserRes>({
        mutation: gql`
          ${LOGIN_USER}
        `,
        variables: {loginInput: this.loginForm.value},
      })
      .subscribe(
        ({data}) => {
          this.loginForm.reset();
          setToLocalStorage('token', data?.loginUser.token || '');
          this.router.navigate(['']);
          this._snackBar.open(
            snackbarMessages.loginMessage,
            snackbarMessages.defaultActionMessage,
            {
              duration: 2000,
            },
          );
        },
        (error) => {
          this._snackBar.open(
            snackbarMessages.errorMessage,
            snackbarMessages.defaultActionMessage,
            {
              duration: 2000,
            },
          );
        },
      );
  }
}
