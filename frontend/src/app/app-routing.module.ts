import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {FavoriteComponent} from "./favorite/favorite.component";


const routes: Routes = [
    {path: '', component: UserComponent, children: [
        {path: ':id/favourites', component: FavoriteComponent, children: [
            // {path: 'favourites', component: UserComponent}
            ]}
        ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
