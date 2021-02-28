import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import {Subscription} from 'rxjs';
import {GET_NEWS_BY_ID} from 'src/graphql/news.graphql';
import {getFromLocalStorage} from 'src/utils/localStorage';
import {INews} from '../news-page/news-page.component';

export interface INewsRes {
  getNewsById: INews;
}

@Component({
  selector: 'app-news-details-page',
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.scss'],
})
export class NewsDetailsPageComponent implements OnInit {
  id: string = '';
  news: INews | null = null;
  loading: boolean = true;
  private querySubscription: Subscription | null = null;
  constructor(
    private apollo: Apollo,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.querySubscription = this.apollo
      .query<INewsRes>({
        query: gql`
          ${GET_NEWS_BY_ID}
        `,
        variables: {
          id: this.id,
        },
        context: {
          headers: {
            token: getFromLocalStorage('token'),
          },
        },
      })
      .subscribe(
        ({data, loading}) => {
          this.news = data?.getNewsById;
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
