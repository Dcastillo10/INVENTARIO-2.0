import Inventario from "./inventario.js"

let miInventario=new Inventario();

const btnAdd=document.getElementById(`btnAdd`);
btnAdd.addEventListener(`click`,()=>{
    let nombre=document.getElementById(`txtNom`).value;
    let codigo=document.getElementById(`txtCod`).value;
    let cantidad=document.getElementById(`numCant`).value;
    let costo=document.getElementById(`numCosto`).value;

    miInventario.agregar(nombre,codigo,cantidad,costo);
})

const btnBuscar=document.getElementById(`btnBuscar`);
btnBuscar.addEventListener(`click`,()=>{
    let producto=document.getElementById(`txtCodProd`);
    if(miInventario.buscar(producto)==null){
        console.log("No existe el que buscas");
    }else{

    }
    
})



const btnEliminar=document.getElementById(`btnEliminar`);
btnEliminar.addEventListener(`click`,()=>{
    let producto=document.getElementById(`txtProdEliminar`);
    miInventario.eliminar(producto);
})


const btnListar=document.getElementById(`btnListar`);
btnListar.addEventListener(`click`,()=>{
    miInventario.listar();
})