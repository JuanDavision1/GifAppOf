import { Component,Input } from '@angular/core';
import { Gif } from '../../../interfaces/gif.interfaces';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent {
@Input()
 public gifs:Gif[]=[];
}
