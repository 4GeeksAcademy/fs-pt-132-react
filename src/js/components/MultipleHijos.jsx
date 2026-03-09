import React from "react";

const MultiplesHijos = () => {
/*
           EN EL RETORNO SOLO UN ELEMENTO PRIMARIO, NO PUEDEN HABER MAS DE UN ELEMENTO PRIMARIO
           return(
            <div></div> --> UN DIV COMO ELEMENTO DIRECTO DEL RETURN --> OK
            )
            
            return (
            <div></div> ----> DOS ELEMENTO DIRECTO DEL RETURN --> MAL
            <div></div> ----> DOS COMO ELEMENTO DIRECTO DEL RETURN --> MAL 
            )
            
            */

    return(
        <div>
            UN SOLO ELEMENTO PRIMARIO
            <div>
                PUEDE TENER
                <div>
                    TANTOS HIJOS
                    <div>
                        COMO QUIERA
                    </div>
                    <div>
                        YA SEAN HERMANOS
                    </div>
                    <div>
                        O HIJOS
                    </div>
                </div>
            </div>
        </div>
    )

}


export default MultiplesHijos