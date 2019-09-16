import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favourites: any;
  user: any;
  user_id: number;
  movies: Array<any> = [];

    searchForm: FormGroup;
    submitted = false;
    errorMsg;
    result: any;

  constructor(private movieService: MoviesService, private userService: UserService, private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.searchForm = this.formBuilder.group({
          title: ['', Validators.required],
      });
      this.route.params.subscribe(
          params => {
              this.user_id = params.id;
              this.getFavs(params.id);
              this.userService.getUserAPI(params.id)
                  .subscribe(
                      (data) => {
                        this.user = data;
                      }
                  )
          }
      )
  }

  getFavs(id: number) {
      this.movieService
          .userFavouriteMoviesAPI(id)
          .subscribe(
              (data) => {
                  this.favourites = data;
                  this.movies = [];
                  for (let i = 0; i < this.favourites.length; i++) {
                      console.log(this.favourites[i]);
                      this.getMovie(this.favourites[i].imdb_id)
                  }
              }
          );
  }

  getMovie(imdb_id: string) {
    this.movieService.getMovie(imdb_id)
        .subscribe(
            (data) => {
                console.log(data);
                this.movies.push(data);
            }
        )
  }

    get f() { return this.searchForm.controls; }

    search() {
        this.submitted = true;
        this.result = null;
        console.log(this.searchForm.value);
        this.movieService.findMovie(this.searchForm.value.title)
            .subscribe(
                (data) => {
                    console.log(data);
                    this.result = data;
                }
            )
    }

    add(imdb_id: string) {
        this.route.paramMap.subscribe(
            params => {
                // console.log(params["id"]);
                this.user_id = parseInt(params.get('id'));
                console.log(this.user_id);
                this.movieService.addFav({user_id: this.user_id, imdb_id: imdb_id})
                    .subscribe(
                        (data) => {
                            console.log(data);
                            this.result = null;
                            this.getFavs(this.user_id);

                        }
                    )
            }
        )

    }

    remove(imdbId: number) {
      // console.log(imdbId);
        let fav_id = this.favourites.filter(x => x.imdb_id == imdbId)[0].id;
        this.movieService.removeFav(fav_id)
          .subscribe(
              (data) => {
                  this.getFavs(this.user_id);
              }
          )
    }


}
