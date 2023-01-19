<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @yield('css')
    @vite(['resources/js/app.js', 'resources/css/app.scss'])
    <link href="{{ asset('css/css.css') }}"  rel="stylesheet" >
    <title>Document</title>
</head>
<body>
    @include('layouts.navbar')

    @yield('content')

    
    @yield('js')
</body>
</html>