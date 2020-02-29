import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
	httpOptions:any = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer cf92c21d0d334b8ea0f4e0dbf406feae',
    'Accept': 'text/javascript'
  })
};


  constructor(public http: HttpClient) { }
  listaequipo(){
  	 let authHeader = 'cf92c21d0d334b8ea0f4e0dbf406feae';
  	 let headersObj = new Headers();
    headersObj.append('Authorization', authHeader);
    return this.http.get('https://api.football-data.org/v2/competitions/2019/teams',{
            headers: new HttpHeaders().set('x-auth-token', 'cf92c21d0d334b8ea0f4e0dbf406feae'),
          })
  }
  listadepartidos(){
  	let authHeader = 'cf92c21d0d334b8ea0f4e0dbf406feae';
  	 let headersObj = new Headers();
    headersObj.append('Authorization', authHeader);
    return this.http.get('https://api.football-data.org/v2/competitions/CL/matches?status=FINISHED',{
            headers: new HttpHeaders().set('x-auth-token', 'cf92c21d0d334b8ea0f4e0dbf406feae'),
          })
  }
 //'https://api.football-data.org/v2/competitions/CL/matches'
 //https://api.football-data.org/v2/competitions/2019/teams
//https://api.football-data.org/v2/competitions/CL/matches?status=FINISHED
}
