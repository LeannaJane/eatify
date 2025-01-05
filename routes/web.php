<?php

use App\Http\Controllers\CabinetController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
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

    Route::middleware('auth')->group(function () {
        Route::post('/cabinet/create', [CabinetController::class, 'create']);
        Route::get('/cabinets', [CabinetController::class, 'getAll']);
        Route::post('/cabinets/delete', [CabinetController::class, 'delete']);
    });
});

// Catch all for react
Route::get('/{pathMatch}', function() {
    return view('welcome');
})->where('pathMatch', '.*');
