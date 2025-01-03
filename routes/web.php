<?php

use App\Http\Controllers\CabinetController;
use Illuminate\Support\Facades\Route;

// Homepage
Route::get('/', function () {
    return view('welcome');
});

// API endpoints
Route::prefix('api')->group(function () {
    Route::post('/cabinet/create', [CabinetController::class, 'create']);

    Route::get('/cabinets', [CabinetController::class, 'getAll']);
    Route::post('/cabinets/delete', [CabinetController::class, 'delete']);
});

// Catch all for react
Route::get('/{pathMatch}', function() {
    return view('welcome');
})->where('pathMatch', '.*');
