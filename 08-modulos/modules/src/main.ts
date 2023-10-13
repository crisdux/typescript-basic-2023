

import { getAllPosts } from './AllPosts';
import { singlePost } from './SinglePost';
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


const res = async () => {
    try{
        const x = await getIP2("8.8.8.8","json");
        console.log("🚀 ~ file: main.ts:51 ~ res ~ x:", x.ip);
        
    }
    catch{
        console.log(res);
    }
}

res();


console.log("-".repeat(50));

const todosLosPosts = async() => {
    try{
        const res = await getAllPosts();
        console.log(res)
    }
    catch{
        console.log("Error")
    }
}

todosLosPosts();


singlePost(1)
    .then((data) => console.log(data))
    .catch(err => console.log(err))