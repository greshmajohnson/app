import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  articles: ArticleModel[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.updateArticles();
  }

  updateArticles() {
    this.articleService.getArticles().subscribe((aritcleData: any) => {
      this.articles = aritcleData;
    });
  }

  approveArticle(article: ArticleModel) {
    console.log(article);
    const id = article?._id || '';
    this.articleService
      .updateArticleStatus(id, 'APPROVED')
      .subscribe((response) => {
        console.log('Article Approved.');
        this.updateArticles();
      });
  }

  denyArticle(article: ArticleModel) {
    console.log(article);
    const id = article?._id || '';
    this.articleService
      .updateArticleStatus(id, 'DENIED')
      .subscribe((response) => {
        console.log('Article Denied.');
        this.updateArticles();
      });
  }

  showApproveDeny(status: any) {
    return status?.toUpperCase() == "PENDING APPROVAL";
  }
 
  deleteArticle(article: ArticleModel) {
    console.log(article);
    const id = article?._id || '';
    this.articleService.deleteArticle(id).subscribe((response) => {
      console.log('Article Deleted.');
      this.updateArticles();
    });
  }
}
