import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardlistComponent } from './components/card-list/cardlist/cardlist.component';
import { GifscardComponent } from './components/gifscard/gifscard.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardlistComponent,
    GifscardComponent  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent  ]
})
export class GifsModule { }
