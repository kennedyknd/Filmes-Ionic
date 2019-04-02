import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AtoresService {

  constructor(
    private http: HttpClient

  ) { }

  getPopular(){
    return this.http.get('https://api.themoviedb.org/3/person/popular?api_key=103603c02439915e94839e81e5ea0042')
  }

  getDetails(person_id){
    return this.http.get('https://api.themoviedb.org/3/person/' + person_id + '?api_key=103603c02439915e94839e81e5ea0042')
  }

  getCombinedCredits(person_id){
    return this.http.get('https://api.themoviedb.org/3/person/' + person_id + '/combined_credits?api_key=103603c02439915e94839e81e5ea0042')
  }
}
