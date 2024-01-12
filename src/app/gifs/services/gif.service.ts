import { Injectable } from '@angular/core';
import {HttpClient,HttpParams } from '@angular/common/http';
import { Gif, TipadoServ } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {

public gitlist :Gif[] =[]
private _tagshistory:string[]=[];

private apikey :string = 'FbkkaENaKbXJji08tzaWXAL6ydDF414f'
private serviceurl:string= 'https://api.giphy.com/v1/gifs/'

  constructor(private http:HttpClient) { 
    this.loadlocalstorage();
    console.log('Gif servie')
  }
  get tagHistory(){
    return [...this._tagshistory];
  }
  private organizehistory(tag:string){
    tag = tag.toLowerCase();
    if ( this._tagshistory.includes(tag)){
      this._tagshistory = this._tagshistory.filter((oldtag)=>oldtag!== tag)
    }
    this._tagshistory.unshift(tag);
    this._tagshistory = this._tagshistory.splice(0,10);
    this.savelocalstorage()
  }
  private savelocalstorage():void{
    localStorage.setItem('History',JSON.stringify(this._tagshistory))
  }
  private loadlocalstorage():void{
    if(!localStorage.getItem('History')) return;
    this._tagshistory = JSON.parse(localStorage.getItem('History')!) ;
    if(this._tagshistory.length === 0) return
    this.searchtag(this._tagshistory[0]);
  }
public  searchtag(Tag:string):void{
  if(Tag.length == 0) return;
  const params = new HttpParams()
  .set('api_key',this.apikey)
  .set('limit',10)
  .set('q',Tag)

  this.organizehistory(Tag)
  this.http.get<TipadoServ>(`${this.serviceurl}search`,{params})
  .subscribe(resp=>{
    this.gitlist = resp.data
    console.log({gifs:this.gitlist})
  });
}
}