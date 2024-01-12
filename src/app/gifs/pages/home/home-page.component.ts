import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gif-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
constructor(private gifservice:GifService){}
get gifs():Gif[]{
  return this.gifservice.gitlist
}
}
