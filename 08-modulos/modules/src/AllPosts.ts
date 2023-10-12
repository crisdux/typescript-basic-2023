import axios from "axios"
import { Posts } from "./generics/interface/Posts";

export const getAllPosts = async():Promise<Posts> => {
    const res = await axios.get<Posts>(`https://jsonplaceholder.typicode.com/posts/`)
    return res.data;
}