function contactContent(e){
   const contactE = document.querySelector("div");
   contactE.innerHTML = `
   <section class="contacto__section">
   <div class="contacto__section-titulo">
       <h2>Contacto</h2>
   </div>
   <div class="contacto__section-labels">
       <div class="contacto__section__form-nombre">
   
           <label class="contacto__section-form-nmbr" for="name">nombre</label>
           <input class="contacto__section-form-nmbr-input" type="name">
       </div>
       <div class="contacto__section__form-email">
   
           <label class="contacto__section-form-eml" for="email">Email</label>
           <input class="contacto__section-form-eml-input" type="email">
       </div>
       <div class="contacto__section__form-mensaje">
   
           <label class="contacto__section-form-mnsj" for="message">Mensaje</label>
            <textarea name="message" class="contacto__section-form-mnsj-input"></textarea>
       </div>
       
   </div>
   <button class="contacto__section-form-button">Enviar</button>
</section>
   `


   e.appendChild(contactE);
   ;

}