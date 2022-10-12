addEventListener("DOMContentLoaded", (e)=>{
    let myForm = document.querySelector("form");
    // let ventana = document.querySelector("dialog");
    // let respuesta = document.querySelector("#res2");
    // let cerrar = document.querySelector("button");

    myForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let v = data.l * data.a * data.h;
        document.querySelector("#res").innerHTML = `El volumen del ortoedro es: ${v}`;
        
        // respuesta.innerHTML = `El volumen del ortoedro es: ${v}`;
        // ventana.showModal();
    })
    // cerrar.addEventListener("click", (e)=>{
    //     ventana.removeAttribute("open");
    // })


})