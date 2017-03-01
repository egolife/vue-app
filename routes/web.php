<?php

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

$router->get('/', function () {
    return view('welcome');
});

$router->get('/test', function(){
   return view('test');
});
$router->get('skills', function(){
	return ['Laravel', 'Vue', 'PHP', 'Javascript', 'Tooling'];
});

$router->resource('projects', 'ProjectsController');

$router->get('shared-state', function(){
   return view('shared_state');
});

\App\Services\VueLessons::routes();