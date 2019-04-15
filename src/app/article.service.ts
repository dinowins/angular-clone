import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
// import { ARTICLES } from './mock-articles';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.articles = db.list('articles').valueChanges();
  }

  getArticles() {
    return this.articles;
  }

  // getArticleById(articleId: number){
  //   for(var i = 0; i < ARTICLES.length - 1; i++) {
  //     if (ARTICLES[i].id === articleId) {
  //       return ARTICLES[i];
  //     }
  //   }
  // }
}
