function addTitulo(params = {}){
  const template = document.querySelector("#section-1__titulo-template");
  const titulo = document.querySelector(".section-1__titulo");

  template.content.querySelector(".section-1__titulo-1").textContent =
  params.title;

  const clone = document.importNode(template.content, true);
  titulo.appendChild(clone);

}

 //function getDesafio(){
    
   // return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=desafio")
    //.then(res =>{
    //  return res.json()
   // }).then((data)=>{
     // const fieldsCollections = data.items.map((item)=>{
       // return{
         // title: item.fields.contentful

       // }
      //})
      //return fieldsCollections
 //   })
  

//}




function main(){
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);
  
  const contactEl = document.querySelector(".contact-content");
  contactContent(contactEl);
  
  const footerEl = document.querySelector(".footer-content");
  footerContent(footerEl);

  const portfolioEL = document.querySelector(".portfolio-content");
  portfolioContent(portfolioEL);
  

  
  // getDesafio().then(function(desafio){
   // for( const d of desafio){
     // addTitulo(d);
   // }
   //});
  }
  main();
