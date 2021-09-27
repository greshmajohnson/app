import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  form: FormGroup;
  articleCreated: boolean = false;
  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.form = this.fb.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [''],
      owner: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    this.form.controls['owner'].setValue(
      currentUser.firstName + currentUser.lastName
    );
    this.form.controls['status'].setValue('PENDING APPROVAL');
    this.articleService.createArticle(this.form.getRawValue()).subscribe(
      (response) => {
        this.articleCreated = true;
        this.form.reset();
      },
      (err) => {
        this.articleCreated = false;
      }
    );
  }
}
