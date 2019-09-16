import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private apiUrl = "http://backend.test/api/";
    constructor(private http: HttpClient, private router: Router) { }

    registerAPI(user: {name: string, email: string, password: string, password_confirmation: string}) {
        return this.http.post(this.apiUrl +'register/', user);
    }

    getAllUsersAPI() {
        return this.http.get(this.apiUrl +'users');
    }

    getUserAPI(id: number){
        return this.http.get(this.apiUrl +'users/' + id);
    }

}
