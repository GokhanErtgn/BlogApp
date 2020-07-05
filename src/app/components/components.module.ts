import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import {MenuCategoryComponent} from './menu-category/menu-category.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';
import {UrlformatPipe} from '../pipes/urlformat.pipe';
import { ArticleMostViewComponent } from './menu/article-most-view/article-most-view.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component';

@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent,ArticlesComponent, ArticleMostViewComponent, MenuArchiveComponent],
  imports: [
    CommonModule,RouterModule, NgxPaginationModule
  ],
  exports:[
      MenuCategoryComponent,PageTitleComponent,ArticlesComponent,UrlformatPipe,ArticleMostViewComponent,MenuArchiveComponent
  ]
})
export class ComponentsModule { }

