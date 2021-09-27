import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  form: FormGroup;
  articleUpdated: boolean = false;
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

  onFormSubmit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    this.form.controls['owner'].setValue(
      currentUser.firstName + currentUser.lastName
    );
    this.form.controls['status'].setValue('PENDING APPROVAL');
    this.articleService.updateArticle(this.form.getRawValue()).subscribe(
      (response) => {
        this.articleUpdated = true;
        this.form.reset();
      },
      (err) => {
        this.articleUpdated = false;
      }
    );
  }
}