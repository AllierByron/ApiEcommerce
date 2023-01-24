@extends('layouts.master')

@section('css')
@endsection

@section('content')
    <div id="registrar-PR">
        <br><br>
        <input list="productos" type="search" placeholder="Nombre de producto" id="buscar-pr">
        <button onclick="elegir();">Elegir</button>
        <datalist id="productos">
        </datalist>

        <br><br>
        <label for="id-pr">ID</label>
        <input type="id" id="id-pr" disabled>
        <br>
        <label for="nombre-pr">Nombre</label>
        <input type="text" id="nombre-pr">
        <br>
        <label for="cat-pr">Categoria</label>
        <select type="text" id="cat-pr">
            <option value=" ">-Categoria-</option>
        </select>
        <br>
        <label for="desc-pr">Descripcion</label>
        <input type="text" id="desc-pr">
        <br>
        <label for="precio-pr">Precio</label>
        <input type="text" id="precio-pr">
        <br>
        <button onclick="actPr();">Actualizar</button>
        <button onclick="crearPr();">Añadir</button>
        <button onclick="deletePr();">Borrar</button>



        <div div="view-pr"></div>
    </div>

    <script src="{{asset('js/register.js')}}"></script>
@endsection