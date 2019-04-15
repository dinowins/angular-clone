import { Component, OnInit } from '@angular/core';
import { Article } from './../../models/article.model';
import { Router } from '@angular/router';
import { ArticleService } from './../../article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region-caster',
  templateUrl: './region-caster.component.html',
  styleUrls: ['./region-caster.component.scss'],
  providers: [ArticleService]
})
export class RegionCasterComponent implements OnInit {
  articles: Observable<any[]>;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.id]);
  };

}
