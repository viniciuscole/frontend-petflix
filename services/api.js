import axios from "axios"
import { getToken } from "./cookies"

export const api = axios.create({
    // baseURL: "https://apitopcom.pet.inf.ufes.br/"
    baseURL: "http://localhost:3232/",
    headers: {
        "authorization": getToken()
    }
})