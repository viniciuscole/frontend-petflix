import axios from "axios"
import { getToken } from "./cookies"

export const api = axios.create({
    // baseURL: "https://apitopcom.pet.inf.ufes.br/"
    baseURL: "http://200.137.66.9/",
    headers: {
        "authorization": getToken()
    }
})