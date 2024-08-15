const mostrarNombreLetra= () =>{
    const nombre = 'Maria del Mar';
    let i = 0;

    while (i < nombre.length) {
        console.log(nombre.charAt(i));
        i++; 
    }
}

mostrarNombreLetra();

// const mostrarNombreLetrafor = () => {
//     const nombre = 'Maria';
//     for (let i = 0; i < nombre.length; i++) {
//         console.log(nombre.charAt(i));
//     }
// }

// mostrarNombreLetrafor();