import axios from 'axios'
import {Pokemon} from '../generics/interface/Pokemon'
import {Users} from './interface/Users'
import {RickMorty} from './interface/RickMorty'

export const getPokemon = async(pokeId:number):Promise<Pokemon> => {
    const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    return response.data;
}

export const getUsers = async(idUser:number):Promise<Users> => {
    const response = await axios.get<Users>(`https://jsonplaceholder.typicode.com/users/${idUser}`);
    return response.data;
}

export const getPersonajes = async (): Promise<RickMorty> => {
    try {
        const response = await axios.get<RickMorty>(`https://rickandmortyapi.com/api/character`);
        return response.data;
    } catch (error) {
        throw error;
    }
};