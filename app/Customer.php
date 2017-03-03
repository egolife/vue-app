<?php

namespace App;

use App\Services\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use DataViewer;
    protected $guarded = ['id'];

    public static $columns = ['id', 'name', 'email', 'phone', 'created_at', 'updated_at'];
}
