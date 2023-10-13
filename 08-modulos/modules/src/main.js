"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AllPosts_1 = require("./AllPosts");
const SinglePost_1 = require("./SinglePost");
const _01_generic_1 = require("./generics/01-generic");
const _02_poke_1 = require("./generics/02-poke");
const getIP_1 = require("./getIP");
// import {Hero} from './generics/interface/Hero'
// import {Villain} from './generics/interface/Villain'
console.log((0, _01_generic_1.genericFucntion)("Hola".length));
console.log((0, _01_generic_1.genericFucntion)(1.255.toFixed(2)));
console.log((0, _01_generic_1.genericFucntion)({ a: 1 }));
console.log((0, _01_generic_1.genericFucntion)("hola mundo").length);
const deadpool = {
    nombre: "deadpol",
    nombreReal: "Wade",
    levelPoder: 500,
};
console.log((0, _01_generic_1.genericFucntion)(deadpool).nombreReal);
(0, _02_poke_1.getPokemon)(4)
    .then((data) => console.log(data.name))
    .catch((err) => console.log(err))
    .finally(() => console.log("fin de getPokemon"));
(0, _02_poke_1.getUsers)(1)
    .then((data) => console.log(data.name))
    .catch((err) => console.log(err));
(0, _02_poke_1.getPersonajes)()
    .then((data) => console.log(data.results[0].name))
    .catch((err) => console.log(err));
(0, getIP_1.getIP)("8.8.8.8", "json")
    .then((data) => console.log(data.ip))
    .catch((err) => console.log(err));
(0, getIP_1.getIP2)("8.8.8.8", "json")
    .then((data) => console.log(data.ip))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally"));
const res = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const x = yield (0, getIP_1.getIP2)("8.8.8.8", "json");
        console.log("🚀 ~ file: main.ts:51 ~ res ~ x:", x.ip);
    }
    catch (_a) {
        console.log(res);
    }
});
res();
console.log("-".repeat(50));
const todosLosPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, AllPosts_1.getAllPosts)();
        console.log(res);
    }
    catch (_b) {
        console.log("Error");
    }
});
todosLosPosts();
(0, SinglePost_1.singlePost)(1)
    .then((data) => console.log(data))
    .catch(err => console.log(err));
