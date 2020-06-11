import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ArticlePg } from '../models/article-pg';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }
  public loading:boolean=true;
  private apiUrl:string="https://localhost:44356/api/articles";

  getArticles(page:number, pageSize:number)
  {
    let api='${this.apiUrl}/${page}/${pageSize}';
    return this.httpClient.get<ArticlePg>(api).pipe(tap(x=>{
      this.loading=false;
    }));
  }

}
