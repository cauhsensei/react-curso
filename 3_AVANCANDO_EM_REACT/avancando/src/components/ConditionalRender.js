import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Matheus")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            {name === "Matheus" ? (
                <div>
                    <p>O nome é Matheus</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("Matheus")}>Clica aqui!</button>
        </div>
    );
};

export default ConditionalRender;