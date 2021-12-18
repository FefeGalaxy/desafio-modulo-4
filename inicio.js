function getDesafio(){
    
    return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=desafio")
    .then(res =>{
      return res.json()
    }).then((data)=>{
      const fieldsCollections = data.items.map((item)=>{
        return{
          contentful: item.fields.contentful
  
        }
    })
      return fieldsCollections
    })
  
  }
  
  function addDesafio( params = {}){
  
     const container = document.querySelector(".section-1__titulo-1").textContent =
     params.contentful;
  
    
     
  }
  
  
  
  
  
  function getPresentation(){
      
    return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=presentation")
    .then(res =>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      const fieldsCollections = data.items.map((item)=>{
        return{
          presentacion: item.fields.presentacion,
          descripcion: item.fields.descripcion,
        }
    })
      return fieldsCollections
    })
  
  }
  
  function addPresentacion( params = {}){
  
     const container = document.querySelector(".section-2__titulo").textContent =
     params.presentacion;
     const containerl = document.querySelector(".section-2__parrafo").textContent =
     params.descripcion;
  
    
     
  }




  function main(){
  
  


  getDesafio().then((res) => {
    for (const w of res) {
     addDesafio(w);
    }
  });
  getPresentation().then((res) => {
    for (const w of res) {
     addPresentacion(w);
    }
  });
  
 
  }
  main();