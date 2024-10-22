import { useEffect, useState } from "react";

export const FetchingData = () => {
    const[arrayUsuarios, setArrayUsuarios] = useState([]);

    useEffect (() => {
        const getUsers = fetch("https://jsonplaceholder.org/users");

        getUsers 
            .then((res) => res.json())
            .then((usuarios) => 
            {setArrayUsuarios(usuarios);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);

    console.log(arrayUsuarios)

    return (
        <div>
            <h1>Acá van los usuarios</h1>
        </div>
    )
    };