import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import {Subscription} from 'rxjs';
import {GET_USER_BY_ID} from 'src/graphql/user.graphql';
import {getFromLocalStorage} from 'src/utils/localStorage';

interface IRegisterUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  credential: string;
}
export interface IGetUserByIdRes {
  getUserById: IRegisterUser;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  isLoading: boolean = false;
  private querySubscription: Subscription | null = null;
  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .query<IGetUserByIdRes>({
        query: gql`
          ${GET_USER_BY_ID}
        `,
        variables: {userId: getFromLocalStorage('userId')},
        context: {
          headers: {
            token: getFromLocalStorage('token'),
          },
        },
      })
      .subscribe(
        ({data, loading}) => {
          this.isLoading = loading;
          const user = data?.getUserById;
          if (user) {
            this.firstName = user.firstName;
            this.email = user.email;
            this.lastName = user.lastName;
          }
        },
        (error) => {
          this.router.navigate(['']);
        },
      );
  }
  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
