const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
<app-header></app-header>

	<nav class="navbar">
		<div class="navbar-brand">
			<a class="navbar-item">
				<span class="icon">
					<i class="fas fa-handshake"></i>
				</span>
			</a>
	
			<a class="navbar-burger">
				<span></span>
				<span></span>
				<span></span>
			</a>
		</div>
	
		<div class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item">
					Home
				</a>
	
				<a class="navbar-item has-text-weight-bold">
					App
				</a>
			</div>
		</div>
	</nav>

	<main>
		<div class="section has-background-light">	
			<div class="container mb-2">
				<button id="btn-hello" class="button is-primary is-medium" title="Say hello">
					<span class="icon">
						<i class="fas fa-handshake"></i>
					</span>
					<span>Hello</span>
				</button>
				<button id="btn-goodbye" class="button is-warning is-medium" title="Say goodbye">
					<span class="icon">
						<i class="fas fa-sign-out-alt pr-3"></i>
					</span>
					<span>Goodbye</span>
				</button>
				<span class="field">
					<input id="input-firstname" class="input is-medium" style="width:33%" type="text" placeholder="Type in your name">
				</span>
			</div>
			<div class="container">
				<input type="checkbox" id="cb-forcefully" class="checkbox">
				<label for="cb-forcefully"> Forcefully</label>
			</div>
		</div>

		<div class="section has-background-light">
			<div id="output" class="container has-text-weight-bold pb-3">
				Instructions: Type in your name and click one of the buttons!
			</div>	
		</div>
	</main>

	<app-footer data-text="John Pionzio"></app-footer>
`;

// import { formatGreeting } from "./utils.js";
import "./app-footer.js";
import "./app-header.js";

const defaultName = "Mr. X";

const formatGreeting = (greeting, name, forcefully) => {
  const recipient  = name || defaultName;
  const str = `${greeting} ${recipient}`;
  return forcefully ? `${str.toUpperCase()}!` : str;
};

class AppMain extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback()
  {
    // Local Variables
    const cbForcefully = this.shadowRoot.querySelector("#cb-forcefully");
    const helloButton = this.shadowRoot.querySelector("#btn-hello");
    const goodbyeButton = this.shadowRoot.querySelector("#btn-goodbye");

    // Properties
    this.input = this.shadowRoot.querySelector("#input-firstname");
    this.output = this.shadowRoot.querySelector("#output");
    this.forcefully = cbForcefully.checked;

    cbForcefully.onchange = e => {
      this.forcefully = e.target.checked;
    };

    helloButton.onclick = () => {
      this.output.innerHTML = formatGreeting("Hello",this.input.value.trim(),this.forcefully);
    };

    goodbyeButton.onclick = () => {
      this.output.innerHTML = formatGreeting("Goodbye",this.input.value.trim(),this.forcefully);
    };
  }
} 

customElements.define('app-main', AppMain);