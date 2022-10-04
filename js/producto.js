class Producto{
    constructor(codigo, nombre, cantidad, costo){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.costo=costo;
    }

    getNombre(){
        return this.nombre;
    }

    getCodigo(){
        return this.codigo;
    }

    getCantidad(){
        return this.cantidad;
    }

    getCosto(){
        return this.costo;
    }
}


