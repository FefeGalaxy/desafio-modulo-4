
function headerContent(e){
    const headerE = document.createElement("div");
    headerE.innerHTML = `
    <div class="header">
                <h2 class="header__nombre">
                <a class="ap" href="./index.html">Developer jr</a>
                </h2>
                <div class="header__burger">
                    <img  class="header__burger-img" src="https://cdn-icons-png.flaticon.com/512/619/619010.png" alt="">
                </div>
                <div class="header__menu">
                        <a class="ap" href="./portfolio.html">Portfolio</a>
                        <a class="as" href="./servicios.html">Servicios</a>
                        <a class="ac" href="./contacto.html">Contactos</a>
                </div>
                <section class="header__ventana">
                    <div class="header__ventana-cierra">
                        <button class="header__ventana-cierra-b">X</button>
                    </div>
                    <div class="header__ventana__contenido">
                        <a class="ap" href="./portfolio.html">Portfolio</a>
                        <a class="as" href="./servicios.html">Servicios</a>
                        <a class="ac" href="./contacto.html">Contactos</a>
                    </div>
                </section>
            </div>
    `;
    
    const botonAbrir = headerE.querySelector(".header__burger-img");
    const botonCerrar = headerE.querySelector(".header__ventana-cierra");
    const ventana = headerE.querySelector(".header__ventana");
       
        botonAbrir.addEventListener("click", ()=>{
           ventana.style.display = "inherit";
        });
        botonCerrar.addEventListener("click", ()=>{
           ventana.style.display = "";
        });
        e.appendChild(headerE);

        
}

