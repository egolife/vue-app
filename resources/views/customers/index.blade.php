@extends('layouts.app')

@section('content')
    <div class="container">
        <data-viewer source="/api/customers" title="Customer Data"></data-viewer>
    </div>
@stop