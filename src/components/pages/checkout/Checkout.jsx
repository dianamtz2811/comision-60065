import { useState } from "react";

const Checkout = () => {
    const [ userInfo, setUserInfo ] = useState({
        name:"",
        email:"",
        phoneNumber:"",
    })

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        console.log(userInfo);
    };

    const capturarInfo = (evento) => {
        const { name, value } = evento.target;
        setUserInfo({...userInfo, [name]:value });
    }

    return (
    <div>
        <form onSubmit={funcionDelFormulario}>
            <input
                type="text"
                placeholder="Diana Martínez"
                name="name"
                onChange={capturarInfo}/>
            <input
                type="text"
                placeholder="diana@gmail.com"
                name="email"
                onChange={capturarInfo}/>
            <input
                type="text"
                placeholder="555 555 555"
                name="phoneNumber"
                onChange={capturarInfo}/>
            <button>Comprar</button>
            <button type="button">Cancelar</button>
        </form>
    </div>
    )
}

export default Checkout