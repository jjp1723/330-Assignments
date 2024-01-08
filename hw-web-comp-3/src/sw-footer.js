const template = document.createElement("template");
template.innerHTML = `
    <style>
        footer{
            color: white;
            background-color: black;
            padding: .5rem;
            margin-top: .5rem;
        }
    </style>

	<footer>
		&copy; 2021 Ace Coder
	</footer>
`;

class SWFooter extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){ 
        this.render();
    }

    disconnectedCallback(){
        this.onclick = null;
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        this.render();
    }

    static get observedAttributes(){
        return;
    }

    render(){
        
    }
}

customElements.define('sw-footer', SWFooter);