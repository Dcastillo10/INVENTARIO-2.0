import Inventario from "./inventario.js"

let miInventario=new Inventario();


const btnAdd=document.getElementById(`btnAdd`);
btnAdd.addEventListener(`click`,()=>{
    let nombre=document.getElementById(`txtNom`).value;
    let codigo=document.getElementById(`txtCod`).value;
    let cantidad=document.getElementById(`numCant`).value;
    let costo=document.getElementById(`numCosto`).value;
    const producto=new Producto(nombre,codigo,cantidad,costo);
    miInventario.agregar(producto);
})


const btnBuscar=document.getElementById(`btnBuscar`);
btnBuscar.addEventListener(`click`,()=>{
    let producto=miInventario.buscar(document.getElementById(`txtCodProd`).value);
    if(producto.codigo() === null){
        return document.getElementById("resultado").innerHTML=`<h3>No se encontró el producto</h3>`;
    }else{
        return document.getElementById("resultado").innerHTML=
        `<h3> ---PRODUCTO---
              Código: ${this.producto.codigo}
              Nombre: ${this.producto.nombre}
              Cantidad: ${this.producto.cantidad}
              Costo: ${this.producto.costo}
          </h3>`
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