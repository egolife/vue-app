@extends('layouts.app')

@section('content')
    <div id="app">
        {{--<input type="text" v-model="coupon">--}}

        {{--<div class="">--}}
            <coupon v-model="coupon"></coupon>
        {{--</div>--}}
    </div>
@stop

@push('scripts')
<script>
    Vue.component('coupon', {
        props: ['value'],
        template: `
            <input type="text" :value="value" @input="updateCode($event.target.value)">
        `,
        methods: {
            updateCode(code){
                this.$emit('input', code);
            }
        }
    });
    new Vue({
        el: '#app',
        data: {
            coupon: 'FFXXZZ'
        }
    });
</script>
@endpush