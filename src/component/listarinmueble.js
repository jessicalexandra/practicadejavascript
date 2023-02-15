export function listarinmueble(listar,inmueble) {
    
    listar.addEventListener("click", (event) => {
        event.preventDefault();
    
        const divTabla = document.getElementById("listarInmueble");
       
        inmuebleContent(divTabla,inmueble);
        
    
    
    });
    
    
}

const inmuebleContent = (element,inmueble) => {
    element.innerHTML = "";
    const tabla = document.createElement("table");
    buscarInmueble(tabla,inmueble, (error, inmueb) => {
        if (error) {
            element.innerHTML = error;
            return;
        }

        console.log(inmueb);
    
        element.appendChild(inmueb);

    });
    

};

const buscarInmueble = (tabla,inmueble, callback) => {
        
    tabla.classList.add("table", "table-striped", "table-hover");

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    const tbody = document.createElement("tbody");


    th1.innerText = "ID";
    th2.innerText = "Direccion";
    th3.innerText = "Telefono";
    th4.innerText = "Precio";
    th5.innerText = "Estado";

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);

    thead.appendChild(tr);

    if (!inmueble) {
        callback(`No hay inmuebles disponibles`);
    }

    inmueble.forEach( inm => {
        

        if (inm.estado && inm.precio > 200000000 && inm.precio <= 300000000 ) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2= document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            td1.innerText = inm.idInmueble;
            td2.innerText = inm.direccion;
            td3.innerText = inm.telefono;
            td4.innerText = inm.precio;
            td5.innerText = "Disponible";
            td5.classList.add("badge", "text-bg-success");

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tbody.appendChild(tr);
        }

        
    });


    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    callback( null, tabla );

}