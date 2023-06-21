import axios from "axios"
import { getToken } from "./cookies"

export const api = axios.create({
    baseURL: "https://api-petflix.pet.inf.ufes.br/",
    headers: {
        "authorization": getToken()
    }
})