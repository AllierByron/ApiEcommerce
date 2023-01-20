<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="{{ asset('css/app.css') }}"  rel="stylesheet" > -->
    <link href="{{ asset('css/css.css') }}"  rel="stylesheet" >
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
    {{-- @vite(['resources/js/app.js', 'resources/css/app.scss']) --}}
</head>
<body>
    @include('layouts.navbar')

    <div id="filtros">
        <select name="categorias" id="categorias">
            <option value=" ">Todas</option>
            <option value="/?categoryId=1">Ropa</option>
            <option value="/?categoryId=2">Electronicos</option>
            <option value="/?categoryId=3">Muebles</option>
            <option value="/?categoryId=4">Shoes</option>
            <option value="/?categoryId=5">Otros</option>
        </select>
    </div>
    
    <div id="contenedor"></div>
    <div id="load"></div>



    
    <script src="{{ asset('js/search.js') }}"></script>
    <script src="{{ asset('js/prueba.js') }}"></script>
    <script src="{{url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{url('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')}}"></script>
</body>
</html>