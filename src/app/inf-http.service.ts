import { Injectable, ViewChild, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



const baseUrl2 = 'https://www.anapioficeandfire.com/api/characters';

@Injectable({
  providedIn: 'root'
})
export class InfHttpService {

  /*
  private url: string ='https://anapioficeandfire.com/api/characters'
  constructor(private httpClient: HttpClient) {}

  public getChars(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
  

  apiURL: string  =  'https://www.anapioficeandfire.com/api';
  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

*/



  public baseUrl = 'https://www.anapioficeandfire.com/api/';
  
  

  constructor(public _http:HttpClient) {}
    
    public getAllCharacters():any{

      let response = this._http.get(this.baseUrl + 'characters?pageSize=50');
      console.log(response);
      return response;
  
     }

     getAll(params: any): Observable<any> {
      
      return this._http.get<any>(baseUrl2, { params });
    }
/*
     public getAllCharacters():any {
      const url = `https://anapioficeandfire.com/api/characters?page=1&pageSize=${
        this.itemsPerPage
      }`;
      this._http.get(url).subscribe((chars: Char[] ) => {
        
        console.log(chars);
        this.collection = chars;
        this.totalItems = 450;
        return chars;
      });
    }
*/
    /*
     public getPage(page):any {
      const url = `https://anapioficeandfire.com/api/characters?page=${page}&pageSize=50`;
      this._http.get(url).subscribe((data: any) => {
        console.log(data);
        //this.collection = data;
        //this.totalItems = 450;
        return data;
      });
      
    }
    */
     /*
     public getFirstPage(){


      return this._http.get(`${this.apiURL}/characters?page=2&pageSize=10`,{ observe: 'response' }).pipe(tap(res => {
        const Link  = this.parse_link_header(res.headers.get('Link'));
        this.first  = Link["first"];
        this.last   = Link["last"];
        this.prev   = Link["prev"];
        this.next   = Link["next"];

      }));      

  }
  parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
    return links;
  }
  public getNextPage(url: string){

    return this._http.get(url,{ observe: 'response' }).pipe(tap(res => {
      const Link  = this.parse_link_header(res.headers.get('Link'));
      this.first  = Link["first"];
      this.last   = Link["last"];
      this.prev   = Link["prev"];
      this.next   = Link["next"];       
    }));      
}  
*/
}
