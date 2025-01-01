<?php

use Illuminate\Support\Facades\Route;

// Homepage
Route::get('/', function () {
    return view('welcome');
});

// API endpoints
Route::prefix('api')->group(function () {
    Route::get('/users', function () {
        return response()->json(['users' => ['John', 'Jane']]);
    });

    Route::get('/posts', function () {
        return response()->json(['posts' => ['Post 1', 'Post 2']]);
    });
});

// Catch all for react
Route::get('/{pathMatch}', function() {
    return view('welcome');
})->where('pathMatch', '.*');
