import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: ArticleModel[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((aritcleData: any) => {
      this.articles = aritcleData;
    });
  }

  isArticleApproved(status: any) {
    return status?.toUpperCase() == 'APPROVED';
  }
}
