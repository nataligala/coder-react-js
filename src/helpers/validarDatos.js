import Swal from 'sweetalert2'

export const validarDatos = (values) => {
    if(values.name == null){
        Swal.fire({
            icon:'error',
            title:"Por favor, ingresá tu nombre"
        })
        return false
    }

    if(values.lastname == null){
        Swal.fire({
            icon:'error',
            title:"Por favor, ingresá tu apellido"
        })
        return false
    }

    if(values.email == null){
        Swal.fire({
            icon:'error',
            title:"Por favor, ingresá tu email"
        })
        return false
    }

    return true
}