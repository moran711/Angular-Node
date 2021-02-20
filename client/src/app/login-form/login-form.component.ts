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
import {setToLocalStorage} from 'src/utils/localStorage';

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
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
        ),
      ]),
    });
  }

  hide: boolean = true;
  onSubmit() {
    this.apollo
      .mutate<ILoginedUserRes>({
        mutation: gql`
          mutation($loginInput: LoginInput!) {
            loginUser(loginInput: $loginInput) {
              lastName
              token
              firstName
            }
          }
        `,
        variables: {loginInput: this.loginForm.value},
      })
      .subscribe(
        ({data}) => {
          setToLocalStorage('token', data?.loginUser.token || '');
          this.router.navigate(['']);
          this._snackBar.open('You have successfully logged in!', 'Close', {
            duration: 2000,
          });
        },
        (error) => {
          console.log(error);
        },
      );
  }
}
