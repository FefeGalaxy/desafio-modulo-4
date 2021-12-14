//function getDesafio(){
    
  //return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=desafio")
  //.then(res =>{
    //return res.json()
  //}).then((data)=>{
    //const fieldsCollections = data.items.map((item)=>{
      //return{
        //contentful: item.fields.contentful

      //}
  //})
   // return fieldsCollections
  //})

//}

//function addDesafio( params = {}){
  //const container = document.querySelector(".section-1__titulo");

  //container.content.querySelector(".section-1__titulo-1").textContent =
  // params.contentful;
  //container.content.querySelector(".section-1__titulo-2").textContent =
  // params.contentful;
  
  //const clone = document.importNode(container.content, true);
  //container.appendChild(clone);
   
//}


function main(){
  const headerEl = document.querySelector(".header-content");
  headerContent(headerEl);
  
  const contactEl = document.querySelector(".contact-content");
  contactContent(contactEl);
  
  const footerEl = document.querySelector(".footer-content");
  footerContent(footerEl);


 // getDesafio().then((res) => {
   // for (const w of res) {
     //addDesafio(w);
   // }
  //});
  
 
  }
  main();
