class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      
    `<ul>
    <li>
      <a href="index.html">
        <span class=
            "material-icons">
          home
        </span>
        Inicio
      </a>
    </li>
    <li>
      <a href="gps.html">
        <span class=
            "material-icons">
          location_searching
        </span>
        GPS
      </a>
    </li>
    <li>
      <a href="archivos.html">
        <span class=
            "material-icons">
          attach_file
        </span>
        Archivos
      </a>
    </li>
    <li>
      <a href="ayuda.html">
        <span class=
            "material-icons">
          help
        </span>
        Ayuda
      </a>
    </li>
  </ul>
    <br>
    &copy; 2021 Alma velez 
      Basado en pagina https://gilpgdm.github.io/6_iot/index.html de Gilberto 
      Pacheco Gallegos.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
