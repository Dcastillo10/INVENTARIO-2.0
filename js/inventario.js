import Producto from "./producto.js";
//Ahora agregar con listado enlazado doble

class Inventario{

    constructor(){
        this.primero=null;
        this.ultimo=null;
    }


    agregar(nuevo){ //no existe la posibilidad de insertar en una posición determinada
        if(this.primero==null){
            this.primero=nuevo;//COMO ES EL PRIMERO, EL NUEVO ES A LA VEZ EL PRIMERO Y EL ULTIMO
            this.ultimo=nuevo;
        }else{
            //ACOMODO Y 
            if(nuevo.codigo<this.primero.codigo){
                this.agregaP(nuevo);//AQUI COMPARAMOS EL CODIGO DEL NUEVO CON EL PRIMERO Y SÍ ES CORRECTO, LO AGREGA AL PRINCIPIO 
            }else if(nuevo.codigo>this.ultimo.codigo){
                this.agregaU(nuevo);
            }else{
                let aux = this.primero
                while(aux.siguiente.codigo<nuevo.codigo){
                    aux = aux.siguiente;
                }
                nuevo.siguiente = aux.siguiente;
                nuevo.anterior=aux
                aux.siguiente.anterior=nuevo
                aux.siguiente = nuevo
        }
       }
    }

    //MÉTODOS PARA AGREGAR
    agregaP(nuevo){
        this.primero.anterior=nuevo
        nuevo.siguiente=this.primero;
        this.primero=nuevo;
    }
    agregaU(nuevo){
        this.ultimo.siguiente=nuevo;
        nuevo.anterior=this.ultimo;
        this.ultimo=nuevo;
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


    listado(){  // SE UTILIZA LA MISMA LÓGICA PARA EL 
        this.productos.forEach(()=>{
            return `${this.productos.getCodigo()} - ${this.productos.getNombre()}`;
        })
    }


    listarInverso(){
        let aux = this.ultimo;
        let lista = ``;
        while(aux){
            lista += `CODIGO: ${this.productos.getCodigo()} NOMBRE: ${this.productos.getCodigo()}`;
            aux= aux.anterior;
        }
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