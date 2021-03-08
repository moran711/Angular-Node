import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Apollo, gql} from 'apollo-angular';
import {Subscription} from 'rxjs';
import snackbarMessages from 'src/config/snackbarMessages';
import {ADD_NEWS} from 'src/graphql/news.graphql';
import {getFromLocalStorage} from 'src/utils/localStorage';
import {INews} from '../news-page/news-page.component';

interface IAddNewsRes {
  addNews: INews;
}

@Component({
  selector: 'app-add-news-page',
  templateUrl: './add-news-page.component.html',
  styleUrls: ['./add-news-page.component.scss'],
})
export class AddNewsPageComponent implements OnInit, OnDestroy {
  private mutationSubscription: Subscription | null = null;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter news text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'},
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  newsForm: FormGroup;
  constructor(private apollo: Apollo, private _snackBar: MatSnackBar) {
    this.newsForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(2)]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2000000),
      ]),
      image: new FormControl('', [Validators.required]),
    });
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.newsForm.patchValue({image: event.target.result});
    });

    reader.readAsDataURL(file);
  }
  ngOnInit(): void {}

  onSubmit() {
    this.mutationSubscription = this.apollo
      .mutate<IAddNewsRes>({
        mutation: gql`
          ${ADD_NEWS}
        `,
        variables: {data: this.newsForm.value},
        context: {
          headers: {
            token: getFromLocalStorage('token'),
          },
        },
      })
      .subscribe(
        ({data}) => {
          if (data?.addNews._id) {
            this._snackBar.open(
              snackbarMessages.addNewsMessage,
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
  ngOnDestroy() {
    this.mutationSubscription?.unsubscribe();
  }
}
