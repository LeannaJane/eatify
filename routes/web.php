<?php

use App\Http\Controllers\CabinetController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\MealController;
use Illuminate\Support\Facades\Route;

// Homepage
Route::get('/', function () {
    return view('welcome');
});

// API endpoints
Route::prefix('api')->group(function () {
    Route::get('/auth/check', [LoginController::class, 'check']);
    Route::post('/auth/logout', [LoginController::class, 'logout'])->middleware('auth');
    Route::post('/auth/login', [LoginController::class, 'login']);
    Route::post('/auth/register', [RegisterController::class, 'register']);
    Route::get('/meals', [MealController::class, 'getMeals']);
    Route::get('/meal/{id}', [MealController::class, 'getMeal']);

    Route::middleware('auth')->group(function () {
        Route::get('/cabinets', [CabinetController::class, 'index']);
        Route::post('/cabinet/create', [CabinetController::class, 'create']);
        Route::post('/cabinet/{cabinet_id}/add-item', [CabinetController::class, 'addItem']);
        Route::post('/cabinets/delete', [CabinetController::class, 'delete']);
        Route::post('/cabinet/{cabinet_id}/delete-item', [CabinetController::class, 'deleteItem']);


    });
});

// Catch all for react
Route::get('/{pathMatch}', function() {
    return view('welcome');
})->where('pathMatch', '.*');
