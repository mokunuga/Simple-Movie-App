<?php

use Illuminate\Http\Request;
use App\User;
use App\FavouriteMovies;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('favourites', 'FavouriteMoviesController');
Route::get('user/{user_id}/favourites', function($id) {
    return response()->json(FavouriteMovies::where('user_id', $id)->get(), 200);
});
Route::get('users', function(){
    return response()->json(User::all(), 200);
});

Route::get('users/{id}', function($id){
    return response()->json(User::findOrFail($id), 200);
});

Auth::routes();