import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txttaginput')
  public tagInput!:ElementRef<HTMLInputElement>
  constructor(private gifsservice:GifService){}
searchtag(){
  const newTag = this.tagInput.nativeElement.value
this.gifsservice.searchtag(newTag);
this.tagInput.nativeElement.value='';
  console.log({newTag})
}
}
