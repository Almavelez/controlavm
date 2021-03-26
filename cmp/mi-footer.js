class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      
    `
    &copy; 2021 Alma velez 
 <br>
        Fuente de Información: 
        <a href="https://gilpgijs.github.io/"> https://gilpgijs.github.io/</a>. 
     de Gilberto Pacheco Gallegos.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
