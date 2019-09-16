import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    private apiUrl = "http://backend.test/api/";
    constructor(private http: HttpClient, private router: Router) { }

    userFavouriteMoviesAPI(user_id: number) {
      return this.http.get(this.apiUrl + 'user/' + user_id + '/favourites')
    }

    getMovie(imdb_id: string) {
        return this.http.get('http://www.omdbapi.com/?i=' + imdb_id + '&apikey=1d4e064d');
    }

    findMovie(title: string) {
        return this.http.get('http://www.omdbapi.com/?t=' + title + '&apikey=1d4e064d');
    }

    addFav(input: {user_id: number, imdb_id: string}) {
        return this.http.post(this.apiUrl + 'favourites', input);
    }

    removeFav(fav_id: number) {
        return this.http.delete(this.apiUrl + 'favourites/' + fav_id);
    }
}
