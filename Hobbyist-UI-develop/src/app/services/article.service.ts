import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../models';
import * as buildUrl from 'build-url';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get(`${environment.apiEndpoint}/articles/get-articles`);
  }

  getMyArticles(owner: string) {
    const url = buildUrl(
      `${environment.apiEndpoint}/articles/get-my-articles`,
      { queryParams: { owner: owner } }
    );
    return this.http.get(url);
  }

  createArticle(articleData: ArticleModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      `${environment.apiEndpoint}/articles/create-aritcle`,
      articleData,
      httpOptions
    );
  }

  updateArticle(articleData: ArticleModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      `${environment.apiEndpoint}/articles/update-aritcle`,
      articleData,
      httpOptions
    );
  }

  updateArticleStatus(id: string, status: string) {
    const url = buildUrl(`${environment.apiEndpoint}/articles/update-article`, {
      queryParams: { id: id, status: status },
    });
    return this.http.patch(url, {});
  }

  deleteArticle(id: string) {
    const url = buildUrl(`${environment.apiEndpoint}/articles/delete-article`, {
      queryParams: { id: id },
    });
    return this.http.delete(url);
  }
}
