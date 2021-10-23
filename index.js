
//function getDesafio(){
//    return fetch( "https://preview.contentful.com/spaces/96le97k9rsgn/environments/master/content_types?access_token=2T1DAz7-EPZnJiCw8s-sz-JImO5VvZIeCj92qHIZe6A")

//}


//function main(){

    
    
//    getDesafio().then(function(desafio){
        
//        for( const d of desafio ){

//        }
        
//    })

//}
//main();




function addDesafio(params = {}){
    const template = document.querySelector("#conteiner-main__template");
    const container = document.querySelector(".section-2");

    template.content.querySelector(".section-2__titulo").textContent = params.title;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}


function getDesafio(){

    
    return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=desafio")
    .then(res =>{
        return res.json()
        
        
    }).then((json)=>{
        
        const fieldsCollections = json.items.map((item)=>{

            
            return{
                title: item.fields.titulo
            }

        })

        return fieldsCollections;
    });




}


function main(){
    
    
    getDesafio().then(function(Desa){

        
        for( const d of Desa){
            addDesafio(d);
        }

    })


}

main();