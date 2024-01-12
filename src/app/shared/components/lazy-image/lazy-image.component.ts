import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  @Input()
public url!:string;
@Input()
public alt:string ='';

public hasloader:boolean = false;

  ngOnInit(): void {
     if(!this.url) throw new Error('Url required') 

  }
onload(){
  setTimeout(() => {
    this.hasloader = true

  }, 1000);
}
}
