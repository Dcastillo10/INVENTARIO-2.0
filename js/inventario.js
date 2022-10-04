import Producto from "./producto.js";
//push y pop

class Inventario{

    constructor(){
        this.productos=[];
    }


    agregar(nuevo){
       return this.productos.push(nuevo);
    }


    eliminar(codigo){
        this.productos.forEach((producto,i)=>{
            if(producto.codigo===codigo){
                for(let j=i; j<this.productos.length;j++){
                    producto[j]=producto[j+1];
                }
                this.productos.pop();
            }else{
                return null;
            } 
        })
    }

    listado(){
        this.productos.forEach(()=>{
            return `${this.productos.getCodigo()} - ${this.productos.getNombre()}`;
        })
    }



    buscar(codigo){//Busqueda binaria
        this.productos.forEach((producto)=>{
            if(producto.codigo===codigo){
                return `${this.productos.getCodigo()} - ${this.productos.getNombre()}`;
            }else{
                return null;
            }
        })

    }
}