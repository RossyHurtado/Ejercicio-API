var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./components/tag/characters.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield getCharacters();
            this.render(characters);
        });
    }
    render(characters) {
        if (!this.shadowRoot)
            return;
        const charac = characters === null || characters === void 0 ? void 0 : characters.map(({ id, name, status, species, gender, image }) => ` 
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
          ${charac === null || charac === void 0 ? void 0 : charac.join("")}  

        </section> `;
    }
}
customElements.define("app-container", AppContainer);
