/** @format */

///// find elements by id

const mainTitle = document.getElementById("main-title");

// console.log(mainTitle);

mainTitle.innerHTML = "Welcome, LoopyTunes";

///// find elements by class

const infoCollection = document.getElementsByClassName("info");

// console.log(infoCollection);

const infoElementsArray = [...infoCollection];

infoElementsArray.forEach((element) => {
	element.style.color = "red";
});

///// find elements by tagname

const allParagraphs = document.getElementsByTagName("p");

///// find elements By css selector

const first = document.querySelector("header h2"); //first
const all = document.querySelectorAll("header h2"); //Every || on console is NodeList and i can use forEach

// console.log(first);
all.forEach((element) => (element.style.color = "orange"));

/////

//
//
// context: document vs. element
//
//

const allParagraphsInDocument = document.getElementsByTagName("p");

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");

// console.log(allParagraphsInDocument); //9
// console.log(allParagraphsInProductsElm); //3

const allParagraphsInProductsElm_Alternative =
	document.querySelectorAll("#products p");

/////
///// Properties
/////

///////  HTML

const pikachuElm = document.getElementById("pikachu");

pikachuElm.innerHTML = `
  <div class='box'>
       <p>one</p>
           <p>two
                  <a href="#">click here for more info</a>
            </p>
  </div>`;

///////    TEXT

const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us --we are amazing";

mainTitle.style.color = "purple";
mainTitle.style.backgroundColor = "yellow";

mainTitle.style.border = "1px solid green";

//Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id";

//Read/Modify class --> elm.className
mainTitle.className = "title rounded";

//(bonus) elm.classList (provides methods to access class names)

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("hidden-modal");

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target", "_blank");
// remove: elm.removeAttribute(attrName);

/*********************/
/* Create a DOM node */
/*********************/

//
// step1: create the element:
//

const newImg = document.createElement("img");

//
/// step 2 : add content or modify (ex. innerHTML)
//

newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "image of pikachu");

//
//// step 3: append to the dom : 'parentElm.appendChild()'
//

const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);

//
/*********************/
/*********************/
/*    EVENTS         */
/*********************/
/*********************/
//

// elm.addEventListener("nameOfTheEvent", code);
// elm.addEventListener("nameOfTheEvent", () => {});

const btn = document.getElementById("button-1");

btn.addEventListener("click", () => {
	// console.log(`user clicked`);

	const newText = document.createElement("p");
	newText.innerText = "Pikachu is the best";
	// newText.setAttribute("id", "pikachu");
	const parentElmPika = document.getElementById("pikachu");
	parentElmPika.appendChild(newText);
});

const newDiv = document.createElement("div");
newDiv.innerHTML = `<p>hello</p>`;

const bodyDiv = document.getElementById("body");
/*
bodyDiv.addEventListener("keydown", (event) => {
	if (event.code === "Space") {
		// console.log("Space pressed");

		bodyDiv.appendChild(newDiv);
	} else if (event.code === "ArrowDown") {
		console.log("Arrow down Pressed");
	} else if (event.code === "ArrowUp") {
		console.log("Arrow Up Pressed");
	} else if (event.code === "ArrowLeft") {
		console.log("Arrow left Pressed");
	} else if (event.code === "ArrowRight") {
		console.log("Arrow right Pressed");
	}
});
*/
const allBtn = document.querySelectorAll(".btn");
allBtn.forEach((el) => {
	el.addEventListener("click", (event) => {
		//console.log(event.target);
		console.log(`the user click on of the ${event.target.id}`);
	});
});

const box3 = document.getElementById("box-2");
box3.addEventListener("click", (e) => {
	console.log(`click event fired in box-2`);
});

//////

document.addEventListener("click", (el) => {
	console.log(`the user clicked somewhere `);
	// console.log(el.target.id);
});

//
//
//////////  DETECT EVENTS on element dynamically
//
//

const calcBtn = document.getElementById("calculate-btn");
calcBtn.addEventListener("click", (e) => {
	const priceElm = document.getElementById("price");
	console.log(priceElm.value);
});
