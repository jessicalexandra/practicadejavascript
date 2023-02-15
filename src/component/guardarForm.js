export const guardarForm = (enviar, inmueble) => {
    enviar.addEventListener("click", async(e) => {
        e.preventDefault();
    
     
        let id = Number(document.querySelector("#idinmueble").value);
        let direccion = document.querySelector("#direccion")?.value;
        let telefono = document.querySelector("#telefono")?.value;
        let precio = document.querySelector("#precio")?.value;
        let validacion = true;
        
        const mensaje = "este campo es requerido";
        if (!id) {
            alertId.innerText = mensaje;
            alertId.classList.remove("d-none", "text-warnig");
            alertId.classList.add("d-block", "text-danger");
            validacion = false;
    
        }
        if (!direccion) {
            alertDireccion.innerText = mensaje;
            alertDireccion.classList.remove("d-none", "text-warnig");
            alertDireccion.classList.add("d-block", "text-danger");
            validacion = false;
        }
        if (!telefono) {
            alertTelefono.innerText = mensaje;
            alertTelefono.classList.remove("d-none", "text-warnig");
            alertTelefono.classList.add("d-block", "text-danger");
            validacion = false;
        }
        if (!precio) {
            alertPrecio.innerText = mensaje;
            alertPrecio.classList.remove("d-none", "text-warnig");
            alertPrecio.classList.add("d-block", "text-danger");
            validacion = false;
        }
    
        if (precio < 100000000 || precio > 500000000) {
            alertPrecio.innerText = "precio debe de estar entre 100 millones y 500 millones";
            alertPrecio.classList.remove("d-none", "text-warnig");
            alertPrecio.classList.add("d-block", "text-danger");
            validacion = false;
        }
    
        
    
        if (!validacion) return;
    
        await inmueble.push({ 
            idInmueble: id,
            direccion,
            telefono,
            precio,
            estado: true
        });
    
        Swal.fire(
            'Guardado!',
            'El inmueble se guardo correctamente!',
            'success'
          )
    
          document.querySelector("#idinmueble").value = "";
          document.querySelector("#direccion").value = "";
        document.querySelector("#telefono").value = "";
        document.querySelector("#precio").value = "";
    
        alertTelefono.innerText = "";
        alertId.innerText = "";
        alertPrecio.innerText = "";
        alertDireccion.innerText = "";
    
        console.log(inmueble);
    
    });
}