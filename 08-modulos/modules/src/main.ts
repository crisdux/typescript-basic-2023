// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// import Animal from './Animal.ts';
// import {Persona as Person} from './counter.ts'
// import { spirit as caballo } from './data.ts';

// const cris = new Person("Cris", 27);
// console.log(cris.getNombre);

// const boby = new Animal("boby");
// console.log(boby.getNombre);

// console.log(caballo.cola)

import {genericFucntion} from './generics/01-generic';
import { getPersonajes, getPokemon, getUsers } from './generics/02-poke';
import { Hero } from './generics/interface';
import { getIP, getIP2 } from './getIP';

// import {Hero} from './generics/interface/Hero'
// import {Villain} from './generics/interface/Villain'

console.log(genericFucntion("Hola".length))
console.log(genericFucntion(1.255.toFixed(2)))
console.log(genericFucntion({a:1}))


console.log(genericFucntion<string>("hola mundo").length);

const deadpool = {
    nombre: "deadpol",
    nombreReal:"Wade",
    levelPoder: 500,
}
console.log(genericFucntion<Hero>(deadpool).nombreReal);

getPokemon(4)
    .then((data) => console.log(data.name))
    .catch((err) => console.log(err))
    .finally(() => console.log("fin de getPokemon"));

getUsers(1)
    .then((data) => console.log(data.name))
    .catch((err) => console.log(err))

getPersonajes()
    .then((data) => console.log(data.results[0].name))
    .catch((err) => console.log(err));

getIP("8.8.8.8","json")
    .then((data) => console.log(data.ip))
    .catch((err) => console.log(err))

getIP2("8.8.8.8","json")
    .then((data) => console.log(data.ip))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally"))