const template = document.createElement("template");
template.innerHTML = `
    <style>
        div{
            height: 340px;
            width: 170px;
            border: 1px solid gray;
            padding: .5rem;
            background-color: #f4f4f4;
            overflow: scroll;
            font-size: .7rem;
            position: relative;
        }
        
        h2{
            font-size: 1.1rem;
            font-family: SfDistantGalaxy, sans-serif;
            letter-spacing: .67px;
            line-height: 1.2;
            margin-top: 0;
        }
        
        img{
            width: 100px;
        }

        button{
            border-radius: 1px;
            padding: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            opacity: 0.2;
        }

        button:hover{
            opacity: 1;
        }
    </style>
    <div>
        <h2></h2>
        <button>X</button>
        <img alt="mugshot">
        <p id="swcHeight">Height: </p>
        <p id="swcMass">Mass: </p>
        <p id="swcHome">Homeworld: </p>
        <p id="swcAffiliations">Affiliations: </p>
    </div>
`;

class SWCard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){ 
        this.h2 = this.shadowRoot.querySelector("h2");
        this.img = this.shadowRoot.querySelector("img");
        this.p1 = this.shadowRoot.querySelector("#swcHeight");
        this.p2 = this.shadowRoot.querySelector("#swcMass");
        this.p3 = this.shadowRoot.querySelector("#swcHome");
        this.p4 = this.shadowRoot.querySelector("#swcAffiliations")
        this.button = this.shadowRoot.querySelector("button");

        this.button.onclick = () => this.remove();
        this.render();
    }

    disconnectedCallback(){
        this.button.onclick = null;
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        this.render();
    }

    static get observedAttributes(){
        return ["data-name", "data-height", "data-mass", "data-homeworld", "data-affiliations", "data-image"];
    }

    render(){
        const name = this.getAttribute('data-name') ? this.getAttribute('data-name') : "<i>...character name...</i>";
        const height = this.getAttribute('data-height') ? this.getAttribute('data-height') : "0";
        const mass = this.getAttribute('data-mass') ? this.getAttribute('data-mass') : "0";
        const home = this.getAttribute('data-homeworld') ? this.getAttribute('data-homeworld') : "?";
        const affil = this.getAttribute('data-affiliations') ? this.getAttribute('data-affiliations') : "?";
        const imageUrl = this.getAttribute('data-image') ? this.getAttribute('data-image') : "images/catimage-no-image.png";
        
        const affiliations = affil.split(",");

        if (this.h2) this.h2.innerHTML = `${name}`;
        if (this.p1) this.p1.innerHTML = `Height: ${height}`;
        if (this.p2) this.p2.innerHTML = `Mass: ${mass}`;
        if (this.p3) this.p3.innerHTML = `Homeworld: ${home}`;
        if (this.p4){
            console.log(affiliations);
            let html = `Affiliations: `;
            for(let i = 0; i < affiliations.length; i++)
            {
                if(affiliations.length == 0)
                {
                    html += "?";
                    break;
                }
                html += affiliations[i];
                if(i < affiliations.length - 1){ html += ", "; }
            }

            this.p4.innerHTML = html;
        }
        if(this.img) this.img.src = imageUrl;
    }
}

customElements.define('sw-card', SWCard);