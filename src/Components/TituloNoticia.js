class TituloNoticia extends HTMLElement {
	constructor(){
		super();

		const shadow = this.attachShadow({ mode: "open"});

		//base do componente <h1>Daniel Brabo</h1>
		const componentRoot = document.createElement("h1");
		componentRoot.textContent = this.getAttribute("titulo");
		//estilo do componente
		const style = document.createElement("style");
		style.textContent = `
			h1 {
				color: red;
			}
		`;
		//enviar para a shadow
		shadow.appendChild(componentRoot);
		shadow.appendChild(style);

	}
}

customElements.define('titulo-noticia', TituloNoticia)
