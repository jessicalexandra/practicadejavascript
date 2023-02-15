export const alerta = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener("focus", (e) => {
            const value = e.target.name
    
            switch (value) {
                case "idinmueble":
                    alertId.classList.remove("d-none", "text-danger");
                    alertId.classList.add("d-block", "text-warning");
                    alertId.innerText = 'solo se aceptan numeros';
                    break;
    
                case "direccion":
                    alertDireccion.classList.remove("d-none", "text-danger");
                    alertDireccion.classList.add("d-block", "text-warning")
                    alertDireccion.innerHTML = "la direccion es obligatoria";
                    break;
    
                case "telefono":
                    alertTelefono.classList.remove("d-none", "text-danger");
                    alertTelefono.classList.add("d-block", "text-warning")
                    alertTelefono.innerHTML = "ingresa el numero telefonico";
                    break;
    
                case "precio":
                    alertPrecio.classList.remove("d-none", "text-danger");
                    alertPrecio.classList.add("d-block", "text-warning");
                    alertPrecio.innerHTML = "precio debe de estar entre 100 millones y 500 millones";
                    break;
    
            }
    })
       
    });

}