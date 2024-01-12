import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interfaces';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
constructor(private servicehistory:GifService){

}
clickevent(item:string):void{
  return   this.servicehistory.searchtag(item);
}
get tags():string[]{
  return this.servicehistory.tagHistory;

}
}
