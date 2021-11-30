function footerContent(e){
    const footerE = document.createElement("div");
    footerE.innerHTML = `
    <footer class="section-5">
    <div class="section-5__titulo">
        <h1>FEFE</h1>
    </div>
    <div class="section-5__instagram">Instragram
        <img class="section-5__img-1" src="./img/instagram-logo5.png" alt="">
    </div>
    <div class="section-5__linkedin">Linkedin
        <img class="section-5__img-2" src="./img/linkedin-logo.jpg" alt="">
    </div>
    <div class="section-5__github">Github
        <img class="section-5__img-3" src="./img/GitHub-Logo.png" alt="">
    </div>
</footer>    
    `;
    e.appendChild(footerE);
}
footerContent();