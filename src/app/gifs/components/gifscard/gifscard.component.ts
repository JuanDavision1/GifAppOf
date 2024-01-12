import { Component,Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-gifscard',
  templateUrl: './gifscard.component.html',
  styleUrls: ['./gifscard.component.css']
})
export class GifscardComponent implements OnInit {
 
  @Input()
   public gifs!:Gif;
   ngOnInit(): void {
    if(!this.gifs) throw new Error('Method not implemented.');
  }
}
