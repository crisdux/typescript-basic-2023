import axios from "axios"
import { Posts } from "./generics/interface/Posts"


export const singlePost = async(idPost:number):Promise<Posts> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    return response.data;
}