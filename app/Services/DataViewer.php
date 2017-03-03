<?php

namespace App\Services;


use Validator;

trait DataViewer
{
    protected $operators = [
        'equal'                    => '=',
        'not_equal'                => '<>',
        'less_than'                => '<',
        'greater_than'             => '>',
        'less_than_or_equal_to'    => '<=',
        'greater_than_or_equal_to' => '>='
    ];

    public function scopeSearchPaginateOrder($query)
    {

        $v = Validator::make(request([
            'column',
            'direction',
            'per_page',
            'search_column',
            'search_operator',
            'search_input'
        ]), [
            'column'           => 'required|alpha_dash|in:' . implode(',', self::$columns),
            'direction'        => 'required|in:asc,desc',
            'per_page'         => 'integer|min:1',
            'search_column'    => 'required|alpha_dash|in:' . implode(',', self::$columns),
            'search_operator' => 'required|in:' . implode(',', array_keys($this->operators)),
            'search_input'     => 'max:255'
        ]);


        if ($v->fails()) {
            dd($v->messages());
        }
        return $query
            ->orderBy(request('column'), request('direction'))
            ->where(function ($query) {
                if (request()->has('search_input')) {
                    $query->where(
                        request('search_column'),
                        $this->operators[request('search_operator')],
                        request('search_input')
                    );
                }
            })
            ->paginate(request('per_page'));
    }
}