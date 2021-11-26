(function(){
    const botonAbrir = document.querySelector(".servicios__header-img");
    const botonCerrar = document.querySelector(".header__ventana-cierra");
    const ventana = document.querySelector(".header__ventana");
   
    botonAbrir.addEventListener("click", ()=>{
       ventana.style.display = "inherit";
    });
    botonCerrar.addEventListener("click", ()=>{
       ventana.style.display = "";
    });
   
   })();