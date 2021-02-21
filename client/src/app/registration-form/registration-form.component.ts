import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {gql} from '@apollo/client/core';
import {Apollo} from 'apollo-angular';
import regexps from 'src/config/regexps';
import snackbarMessages from 'src/config/snackbarMessages';
import {REGISTER_USER} from '../../graphql/user.graphql';

interface IRegisterUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  credential: string;
}
interface IRegisterUserRes {
  registerUser: IRegisterUser;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  constructor(private apollo: Apollo, private _snackBar: MatSnackBar) {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(regexps.email),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }
  hide: boolean = true;
  onSubmit() {
    this.apollo
      .mutate<IRegisterUserRes>({
        mutation: gql`
          ${REGISTER_USER}
        `,
        variables: {user: this.registrationForm.value},
      })
      .subscribe(
        ({data}) => {
          if (data?.registerUser.firstName) {
            this._snackBar.open(
              snackbarMessages.registrationMessage,
              snackbarMessages.defaultActionMessage,
              {
                duration: 2000,
              },
            );
          }
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
