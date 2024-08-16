"use client";

import {useEffect, useState} from "react";
import { useInputHook } from "lab1/hooks/use-input-hooks";

export default function Formulario() {

    let {value: firstNameValue, bind: firstNameBind} = useInputHook (' ');
    let {value: lastNameValue, bind: lastNameBind} = useInputHook (' ');
    let {value: typeDocumentValue, bind: typeDocumentBind} = useInputHook(' ');
    let {value: documentIdValue, bind: documentIdBind} = useInputHook (' ');
    let {value: emailValue, bind: emailBind} = useInputHook (' ');
    let {value: phoneValue, bind: phoneBind} = useInputHook(' ');
    let {value: addressValue, bind: addressBind} = useInputHook(' ');
    let {value: passwordValue, bind: passwordBin} = useInputHook(' ');
    let [user, setUser] = useState({});
    
    const title =<h2> Captura de Datos</h2>;
    const paragraph =<p> Ingreso de usurarios</p>
    
useEffect (() => {
    user && localStorage.setItem('user', JSON.stringify(user));
}, [user] );

    const getFormData = (event)  => {
        setUser ({
            firt_name: firstNameValue,
            last_name: lastNameValue,
            type_Document: typeDocumentValue,
            document_Id: documentIdValue,
            email: emailValue,
            phone: phoneValue,
            address: addressValue,
            password: passwordValue
        });      

    }
    const handleSubmit =(event) => {
        event.preventDefault();
        console.log('Nombre ${vaue}');
        reset();
    }
    return( <div>
    {title}
    {paragraph}
    <br />
    <form>
        <label> Nombre: 
            <input  name="firstname:" type ="text" {...firstNameBind} />        
            </ label> <br/>
            <label> Apellido:
            <input  name="lastname:" type ="text" {...lastNameBind} />    
            </ label> <br/>
            <label> Tipo de Documento:
            <input  name="typeDocument:" type ="text" {...typeDocumentBind} />    
            </ label> <br/>
            <label> Numero de Documento:
            <input  name="documentId:" type ="text" {...documentIdBind} />
            </ label> <br/>
            <label> e.mail:
            <input  name="email:" type ="text" {...emailBind} />
            </label><br/>
            <label> Telefono:
            <input  name="phone:" type ="text" {...phoneBind} />
            </label><br/>
            <label> Dirección:
            <input  name="address:" type ="text" {...addressBind} />
            </label><br/>
            <label> Password:
            <input  name="password:" type ="text" {...passwordBin} />
            </label><br/>
            <input type="button" value ="Enviar"
                        onClick={(event) => getFormData(event)}/>
    </form>
    </div>)  
    
        
}