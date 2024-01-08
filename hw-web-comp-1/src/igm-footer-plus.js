const template = document.createElement("template");
template.innerHTML = `
<style>
    :host{
        display: block;
        background-color: #ddd;
    }

    span{
        color: #F76902;
        font-variant: small-caps;
        font-weight: bolder;
        font-family: sans-serif;
    }
</style>
<span></span>
<span id="org"></span>
<hr>
`;

class IGMFooter extends HTMLElement{
    constructor(){
        super();

        // 1 - Attatch a Shadow DOM tree to this instance - this creates `shadowRoot`
        this.attachShadow({mode:"open"});

        // 2 - Clone `template` and append it
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // 3 - Called when the component is added to the page
    connectedCallback(){ this.render(); }

    // 4 - A helper method to display the values of the attributes
    render(){
        // Grab the attribute values and assign a default value if necessary
        const year = this.getAttribute('data-year') ? this.getAttribute('data-year') : "1995";
        const text = this.getAttribute('data-text') ? this.getAttribute('data-text') : "Nobody";
        const org = this.getAttribute('data-organization') ? this.getAttribute('data-organization') : "IGM";

        //this.shadowRoot.querySelector("span").innerHTML =  `&copy; Copyright ${year}, ${text}, ${org}`;
        this.shadowRoot.querySelector("span").innerHTML =  `&copy; Copyright ${year}, ${text}, `;
        this.shadowRoot.querySelector("#org").innerHTML =  `Organization: ${org}`;
    }
} 
    
customElements.define('igm-footer', IGMFooter);