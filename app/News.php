<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public static function archives()
    {
        return static::selectRaw('year(created_at) year, monthname(created_at) month, count(*) count')
            ->groupBy('year', 'month')
            ->orderByRaw('min(created_at) desc')
            ->get()
            ->toArray();
    }
}
