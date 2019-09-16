<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FavouriteMovies;

class FavouriteMoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return FavouriteMovies::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $favourites = FavouriteMovies::create($request->all());
        return response()->json($favourites, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return FavouriteMovies::find($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $favourites = FavouriteMovies::findOrFail($id);
        $favourites->update($request->all());

        return response()->json($favourites, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $favourites = FavouriteMovies::findOrFail($id);
        $favourites->delete();

        return response()->json(null, 204);
    }
}
