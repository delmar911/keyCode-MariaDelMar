// mostar las tablas de multiplicar del 1 al 10, hasta el 10

const mostrarTablasMultiplicar = () => {
    const inicio = 1;
    //hasta que numero se multiplica
    const finalTablas = 10;

    for(let i = inicio; i <= finalTablas; i++) {

        let tabla = '';
        
        const numeroInicial = 1;
        //hasta que tabla de muestra
        const numeroFinal = 10;
        for(let j = numeroInicial; j <= numeroFinal; j++) {
            //j es el numero de la tabla y i es por el num que se multiplica
            tabla += `${j} x ${i} = ${i * j}\t`;
        }
        console.log(tabla);
    }
    
}
mostrarTablasMultiplicar();