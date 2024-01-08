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

        // This line of code will create an property named `span` for us, so that we don't have to keep calling this.shadowRoot.querySelector("span");
        this.span = this.shadowRoot.querySelector("span");

        this.count = 0;

        if(!this.dataset.year) this.dataset.year = 1989;
        if(!this.dataset.text) this.dataset.text = "Bill & Ted";
        if(!this.dataset.count) this.dataset.count = "0";
    }

    static get observedAttributes(){
        return ["data-year", "data-text", "data-count", "data-organization"];
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        console.log(attributeName, oldVal, newVal);
        this.render();
    }

    // 3 - Called when the component is added to the page
    connectedCallback(){ 
        this.span.onclick = () => {
            let year = +this.dataset.year + 1;
            this.dataset.year = year;

            let count = +this.dataset.count + 1;
            this.dataset.count = count;
        };

        this.shadowRoot.querySelector("hr").onclick = () => {
            this.remove();
        }

        this.render();
    }

    disconnectedCallback(){
        this.span.onclick = null;
    }

    // 4 - A helper method to display the values of the attributes
    render(){
        // Grab the attribute values and assign a default value if necessary
        const year = this.getAttribute('data-year') ? this.getAttribute('data-year') : "1995";
        const text = this.getAttribute('data-text') ? this.getAttribute('data-text') : "Nobody";
        const org = this.getAttribute('data-organization') ? this.getAttribute('data-organization') : "IGM";
        const count = this.getAttribute('data-count') ? this.getAttribute('data-count') : "0";

        //this.shadowRoot.querySelector("span").innerHTML =  `&copy; Copyright ${year}, ${text}, ${org}`;
        this.shadowRoot.querySelector("span").innerHTML =  `&copy; Copyright ${year}, ${text}, Count: ${count}`;
        this.shadowRoot.querySelector("#org").innerHTML =  `Organization: ${org}`;
    }
} 
    
customElements.define('igm-footer', IGMFooter);