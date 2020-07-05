import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-most-view',
  templateUrl: './article-most-view.component.html',
  styleUrls: ['./article-most-view.component.css']
})
export class ArticleMostViewComponent implements OnInit {
  articles:Article[]=[];
  constructor(private articlesService:ArticleService) { }

  ngOnInit() {
    this.articlesService.getArticlesByMostView().subscribe(data=>{
      this.articles=data;
    })
  }

}
