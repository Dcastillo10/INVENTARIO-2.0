import Producto from "./producto.js";
//push y pop

class Inventario{

    constructor(){
        this.productos=[];
    }


    agregar(nuevo){
       //return this.productos.push(nuevo);
       //agregar y que al mismo tiempo se ordene
        let aux=0;
       for(let i=0, j=nuevo; i>j.codigo ;i++){
        if(j.codigo < this.productos.codigo[i]){ // si el nuevo es menor que la posición consultada debe tomar su lugar
            aux=this.productos[this.productos.length-1]; // guardamos el ultimo valor en una variable auxiliar.
            while(this.productos.codigo < ){//debemos recorrer los valores 
                
            }
            }
        }
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
        let limInf=0, limSup=this.productos.length-1;
        let mitad=0;
        while(limInf<=limSup){
            mitad=Math.floor((limInf+limSup)/2);   //Aquí obtenemos la mtad entre los dos limites
            if(this.productos.codigo[mitad]===codigo){//si la mitad es igual al codigo que buscamos, hacemos...
                return productos[mitad];
            }else if(codigo<this.productos.codigo[mitad]){
                limSup=mitad;
            }else if(codigo>this.productos.codigo[mitad]){
                limInf=mitad;
            }else{
                null;
            }
        }
    }


}











/* antiguo buscar
        this.productos.forEach((producto)=>{
            if(producto.codigo===codigo){
                return `${this.productos.getCodigo()} - ${this.productos.getNombre()}`;
            }else{
                return null;
            }
        })

    }
*/