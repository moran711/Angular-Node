import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {getFromLocalStorage} from 'src/utils/localStorage';

interface ICheckToken {
  result: boolean;
}

interface ICheckTokenRes {
  checkToken: ICheckToken;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;
  canLogin: boolean;
  constructor(private apollo: Apollo) {
    this.token = '';
    this.canLogin = false;
  }
  isLoggedIn() {
    this.token = getFromLocalStorage('token');
    console.log(this.token);

    this.apollo
      .query<ICheckTokenRes>({
        query: gql`
          query($token: String) {
            checkToken(token: $token) {
              result
            }
          }
        `,
        variables: {
          token: this.token,
        },
      })
      .subscribe(
        ({data}) => {
          this.canLogin = data.checkToken.result;
        },
        (error) => {
          console.log(error);
        },
      );
    return this.canLogin;
  }
}
