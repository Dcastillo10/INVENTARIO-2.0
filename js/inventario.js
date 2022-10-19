import Producto from "./producto.js";
//push y pop

class Inventario{

    constructor(){
        this.productos=[];
    }


    agregar(nuevo){
       //return this.productos.push(nuevo);
       //agregar y que al mismo tiempo se ordene
       if(this.productos.length==0){
        this.productos[this.productos.length] = nuevo;
    } else {
            while (this.productos[i]!=null && nuevo.getCodigo < this.productos[i-1].getCodigo){
                nuevo= this.productos[this.productos.length-1];
                for(let i=this.productos.length-1; i >=1; i--){
                this.productos[i]=this.productos[i-1];
                }
                this.productos[0] = x;
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


    listarInverso(){
        let productos =" ";
        if(this.productos.length>0){
            for(let i=this.productos.length-1; i>=0 ;i--)
                productos += `${this.productos[i].getCodigo()} - ${this.productos[i].getNombre()} `;
        }else 
            return false;

        return productos;
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