import React from "react";

function Contador(props){
    //const[contador, setContador] = useState(0);

    function handleContador(){
        props.incrementCounter(1);
    }

    return(
        <div>
            <p>{props.count}</p>
            <input onClick={handleContador} type="button" value="Sumar"/>
        </div>
    );
}

export default Contador;