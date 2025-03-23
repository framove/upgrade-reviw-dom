/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");

countries.forEach ((country) => {
    let liCountry = document.createElement("li");
    liCountry.innerText = country;
    ulCountries.appendChild(liCountry);
})

document.body.appendChild(ulCountries);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeElement = document.querySelector(".fn-remove-me");

removeElement.remove();



/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
 en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul");

cars.forEach ((car) => {
    let liCar = document.createElement("li");
    liCar.innerText = car;
    ulCars.appendChild(liCar);
})

const printHere = document.querySelector('[data-function]');

printHere.appendChild(ulCars);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countriesTitle = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const elements = [];

countriesTitle.forEach (country => {
    const countriesDiv = document.createElement("div");
    const titleH4 = document.createElement("h4");
    titleH4.textContent = country.title;

    const imagen = document.createElement("img");
    imagen.src = country.imgUrl;
    imagen.alt = country.title;

    countriesDiv.appendChild(titleH4);
    countriesDiv.appendChild(imagen);
    
    document.body.appendChild(countriesDiv);
    elements.push(countriesDiv);
})



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const buttonDelete = document.createElement("button");

buttonDelete.className ="removeLast";
buttonDelete.textContent = "Remove Last";

buttonDelete.addEventListener('click', () => {
    const lastElemnt = elements.pop();
    if (lastElemnt) {
        document.body.removeChild(lastElemnt);
    }
})

document.body.appendChild(buttonDelete);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

elements.forEach(element => {
    const buttonDeleteOne = document.createElement("button");
    buttonDeleteOne.className = "remove";
    buttonDeleteOne.textContent = "Remove";

    buttonDeleteOne.addEventListener('click', () => {
        element.remove();
    })
    element.appendChild(buttonDeleteOne);
 
})

