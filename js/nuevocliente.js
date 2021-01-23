import { nuevoCliente } from './API.js';
import {mostrarAlerta, validar} from './funciones.js';

(function(){
    const formularios=document.querySelector('#formulario');
    formulario.addEventListener('submit',validarCliente);

    function validarCliente(e) {
        e.preventDefault();
        const nombre=document.querySelector('#nombre').value;
        const email=document.querySelector('#email').value;
        const telefono=document.querySelector('#telefono').value;
        const empresa=document.querySelector('#empresa').value;

        const cliente={
            nombre,
            email,
            telefono,
            empresa
        }

        //console.log(Object.values(cliente).every(input=>input!=''));

        console.log(validar(cliente));

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        //console.log('Si se paso la validacion');
        nuevoCliente(cliente);
    }
    

    
}
)();