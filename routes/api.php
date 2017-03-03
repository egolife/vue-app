<?php

use App\Customer;
use Illuminate\Http\Request;

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

$router->get('customers', function () {
    $model = Customer::searchPaginateOrder();
    $columns = Customer::$columns;

    return response()->json([
        'model' => $model,
        'columns' => $columns
    ]);
});