import {getCharacters} from "./components/tag/characters.js";
import { Character } from "./tipos.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });    
    }

    async connectedCallback() {
        const characters = await getCharacters();
        this.render(characters);
    }

    render(characters: Array<Character>) {
        if(!this.shadowRoot) return;
        
        const charac = characters?.map(({ id, name, status, species, gender,image}) =>` 
        <link rel="stylesheet" href=" ./app/components/tag/style.css"
         
        <article>
        <div class="card">
         <div class="tools">
         <div class="circle">
      <span class="red box"></span>
       </div>
       <div class="circle">
      <span class="yellow box"></span>
      </div>
      <div class="circle">
      <span class="green box"></span>
      </div>
      </div>
      <div class="card__content">
      </div>
      </div>

      <img src="${image}" alt="" class="profile">

      <div class="namep">
      <h3>NAME: ${name}</h3>

      <div class="info">
        <h3>ID: ${id} </h3>
        <h3>STATUS: ${status}</h3>
        <h3>SPECIES:${species}</h3>
        <h3>GENDER:${gender}</h3>

         </div>
        </div>

        </article>`);

        this.shadowRoot.innerHTML = `<section>
          ${charac?.join("")}  

        </section> `;
         
        }
     }

customElements.define("app-container",AppContainer);