import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models';
import { ArticleService } from 'src/app/services/article.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css'],
})
export class MyArticlesComponent implements OnInit {
  articles: ArticleModel[] = [];
  owner: string = '';

  constructor(private authService: AuthenticationService ,private articleService: ArticleService) {}

  ngOnInit(): void {
    this.owner = `${this.authService.getCurrentUser().firstName}${this.authService.getCurrentUser().lastName}`;
    this.updateArticles();
  }

  updateArticles() {
    this.articleService.getMyArticles(this.owner).subscribe((aritcleData: any) => {
      this.articles = aritcleData;
    });
  }

  reApproveArticle(article: ArticleModel) {
    console.log(article);
    const id = article?._id || '';
    this.articleService
      .updateArticleStatus(id, 'PENDING APPROVAL')
      .subscribe((response) => {
        console.log('Article Applied for RE-Approval.');
        this.updateArticles();
      });
  }

  deleteArticle(article: ArticleModel) {
    console.log(article);
    const id = article?._id || '';
    this.articleService.deleteArticle(id).subscribe((response) => {
      console.log('Article Deleted.');
      this.updateArticles();
    });
  }

  // updateArticle(article: ArticleModel) {
  //   console.log(article);
  //   const id = article?._id || '';
  //   this.articleService.updateArticle(id).subscribe((response) => {
  //     console.log('Article Updated.');
  //     this.updateArticles();
  //   });
  // }

  showReApprove(status: any) {
    return status?.toUpperCase() == 'DENIED';
  }
}
