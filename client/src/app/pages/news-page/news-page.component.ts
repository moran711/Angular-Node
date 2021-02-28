import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import {Subscription} from 'rxjs';
import {newsText} from 'src/config/news/news.text';
import paths from 'src/config/routes';
import {GET_ALL_NEWS} from 'src/graphql/news.graphql';
import {getFromLocalStorage} from 'src/utils/localStorage';
import {IRegisterUser} from '../../components/registration-form/registration-form.component';

export interface INews {
  _id?: string;
  author: IRegisterUser;
  title: string;
  image: string;
  text: string;
  dateOfCreation: string;
}

export interface INewsRes {
  getAllNews: INews[];
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news: INews[] = [];
  noNewsMsg: string = newsText.noNewsMessage;
  loading: boolean = true;
  pathToNewsAddPage: string = paths.pathToNewsAddPage;
  private querySubscription: Subscription | null = null;
  constructor(private apollo: Apollo, private router: Router) {}
  ngOnInit(): void {
    this.querySubscription = this.apollo
      .query<INewsRes>({
        query: gql`
          ${GET_ALL_NEWS}
        `,
        context: {
          headers: {
            token: getFromLocalStorage('token'),
          },
        },
      })
      .subscribe(
        ({data}) => {
          this.news = data?.getAllNews;
          this.loading = false;
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
