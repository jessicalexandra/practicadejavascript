

export function buscarinmueble(buscar,inmueble) {
    buscar.addEventListener("click", (event) => {
        event.preventDefault();
    
    
        let id = Number(document.querySelector("#idinmueble").value);
    
        if (!id) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se requiere idinmeble ' ,
          
              })
            return;
        }
    
        const inmueb=inmueble.find(inmueble=>inmueble.idInmueble===id);
    
        if (!inmueb){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El inmueble con el id: ${id} no fue encontrado` ,
          
              })
              return;
        } 
    
        document.querySelector("#direccion").value = inmueb.direccion;
        document.querySelector("#telefono").value = inmueb.telefono;
        document.querySelector("#precio").value = inmueb.precio;
    
    
    }); 
 }

