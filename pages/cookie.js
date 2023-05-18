import { api } from '@/services/api';
import { getToken, setToken } from '@/services/cookies';
import { useEffect, useState } from 'react';

export default function Cookie() {

    const [name, setName] = useState("Petiano");
    useEffect(() => {
        setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjQ5MTE2Zjc0LWRiMmUtNGUwOC1hZWE1LWJjNGJlMWMwNmNkMCIsImlhdCI6MTY4NDA3NTIyMywiZXhwIjoxNjg0MTA0MDIzfQ.1jL1y7syOYGvm5YIrYgbEPb6kuNdw2jaJewcvAoT7Y8");

        api.get("/api/user").then((response) => {
            if (response.status === 200) {
                setName(response.data.user.name)
            }
        }).catch(e => {
            console.log("nao esta logado")
            // ex. pode retornar para a pagina principal
        })

    }, []);

    return (
        <div>
            Olá, {name}
        </div>
    );
};
