<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ManagementUserController;
use App\Http\Controllers\Admin\Master\CategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix("admin")->group(function () {
    Route::get("dashboard", [DashboardController::class, "index"])->name('dashboard.index');
    Route::resource("management-user", ManagementUserController::class);
    Route::prefix("master")->group(function () {
        Route::resource("category", CategoryController::class);
    });
});
