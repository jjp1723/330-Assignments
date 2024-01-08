const template = document.createElement("template");
template.innerHTML = `
<style>
:host{
  display: block;
  background-color: #ddd;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: .5em;
  margin-bottom: .5em;
}
footer{
  font-variant: small-caps;
  font-family: sans-serif;
  text-align: center;
}
</style>
<footer>???</footer>
`;

class AppFooter extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback(){
    this.render();
  }

  render(){
    const text = this.dataset["text"] || "Nobody";
    this.shadowRoot.querySelector("footer").innerHTML = `<b>Greeter</b> by ${text}`;
  }
} 

customElements.define('app-footer', AppFooter);