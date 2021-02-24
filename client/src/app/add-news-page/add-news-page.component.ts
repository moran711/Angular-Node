import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news-page',
  templateUrl: './add-news-page.component.html',
  styleUrls: ['./add-news-page.component.scss']
})
export class AddNewsPageComponent implements OnInit {
  newsForm: FormGroup;
  constructor() {
    this.newsForm = new FormGroup({
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.newsForm.setValue({image:event.target.result });
      console.log(this.newsForm);
      
    });

    reader.readAsDataURL(file);
  }
  ngOnInit(): void {
  }

}
