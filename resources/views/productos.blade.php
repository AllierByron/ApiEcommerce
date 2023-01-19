@extends('layouts.master')

@section('content')
    <ul>
        <li><a href="{{asset('/')}}">Ver productos</a></li>
        <li><a href="{{asset('/rps')}}">Modificar Productos</a></li>
    </ul>
@endsection