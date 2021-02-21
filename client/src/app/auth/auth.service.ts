import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {getFromLocalStorage} from 'src/utils/localStorage';
import {CHECK_TOKEN} from '../../graphql/user.graphql';

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

    this.apollo
      .query<ICheckTokenRes>({
        query: gql`
          ${CHECK_TOKEN}
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
