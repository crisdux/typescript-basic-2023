import axios from "axios"
import { IP, TypeFormatIP } from "./generics/interface/IP";

export const getIP = async(ip:string ,format: TypeFormatIP):Promise<IP> => {
    const {data} = await axios.get<IP>(`https://ipapi.co/${ip}/${format}/`);
    return data;
}

export const getIP2 = async(ip:string ,format: TypeFormatIP):Promise<IP> => {
    const response = await fetch(`https://ipapi.co/${ip}/${format}/`);
    const salida = await response.json();
    return salida as Promise<IP> ;
}

