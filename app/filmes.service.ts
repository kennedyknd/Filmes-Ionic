import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(
    private http: HttpClient

  ) { }

getMovie(){
  return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=103603c02439915e94839e81e5ea0042')
}

getPopular(){
  return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=103603c02439915e94839e81e5ea0042')
}

getDetails(movie_id){
  return this.http.get('https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=103603c02439915e94839e81e5ea0042')
}

getCredits(movie_id){
  return this.http.get('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?api_key=103603c02439915e94839e81e5ea0042')
}

}
