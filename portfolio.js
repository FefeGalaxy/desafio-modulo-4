function addPortfolio(){
    const template = document.querySelector("#portfolio__section-template");
    const container = document.querySelector(".portfolio__section");



    const clone = document.importNode(template.content, true)
    container.appendChild(clone);
}







function main () {
    const headerEl = document.querySelector(".header-content");
    headerContent(headerEl);
    
    
    addPortfolio()
    addPortfolio()
    addPortfolio()
    
    const footerEl = document.querySelector(".footer-content");
    footerContent(footerEl);
}

main();