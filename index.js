

 




function main(){
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);
  
  const contactEl = document.querySelector(".contact-content");
  contactContent(contactEl);
  
  const footerEl = document.querySelector(".footer-content");
  footerContent(footerEl);


  
  getDesafio().then((res) => {
    for (const w of res) {
     addDesafio(w);
    }
  });
  
 
  }
  main();
