<?php

/**
 * @var \Illuminate\Routing\Router $router
 */
$router->get('/', function () {
    return view('welcome');
});

$router->get('/test', function () {
    return view('test');
});
$router->get('skills', function () {
    return ['Laravel', 'Vue', 'PHP', 'Javascript', 'Tooling'];
});

$router->resource('projects', 'ProjectsController');

$router->get('shared-state', function () {
    return view('shared_state');
});

$router->get('es6-learning', function () {
    return view('es6_learning');
});

$router->resource('news', 'NewsController');
\App\Services\VueLessons::routes();

$router->resource('users', 'UsersController');
$router->resource('customers', 'CustomersController');

Auth::routes();

$router->get('/home', 'HomeController@index');
