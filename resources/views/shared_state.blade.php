@extends('layouts.app')

@section('content')
    <div id="one">
        <h1>
            @{{ shared.user.name }}
        </h1>
    </div>

    <div id="two">
        <h1>
            @{{ shared.user.name }}
        </h1>
    </div>
@stop

@push('scripts')
    <script src="{{ mix('js/shared_state.js') }}"></script>
@endpush