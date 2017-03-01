<?php

namespace App\Services;

class VueLessons
{
    const LESSONS_PATH = 'vue2_casts.';

    protected static $urls = [
        'custom-input-components'
    ];

    public static function routes()
    {
        $router = app()->make('router');
        foreach (self::$urls as $url) {
            $router->get($url, function () use ($url) {
                return view(static::LESSONS_PATH . str_replace('-', '_', $url));

            });
        }
    }
}