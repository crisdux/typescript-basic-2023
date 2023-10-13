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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonajes = exports.getUsers = exports.getPokemon = void 0;
const axios_1 = __importDefault(require("axios"));
const getPokemon = (pokeId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    return response.data;
});
exports.getPokemon = getPokemon;
const getUsers = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${idUser}`);
    return response.data;
});
exports.getUsers = getUsers;
const getPersonajes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://rickandmortyapi.com/api/character`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
});
exports.getPersonajes = getPersonajes;
