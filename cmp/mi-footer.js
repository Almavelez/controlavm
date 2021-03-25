class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      
    `
    &copy; 2021 Alma velez 
      Basado en pagina https://gilpgdm.github.io/6_iot/index.html de Gilberto 
      Pacheco Gallegos.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
