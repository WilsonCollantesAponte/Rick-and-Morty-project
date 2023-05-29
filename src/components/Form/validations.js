export function Validations(data){
    const regExEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)

    const regExPassword = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)

    let errors={}

    if(!regExEmail.test(data.email))errors.email="Escriba un texto con formato email.\n Ejemplo: \n 'foo-bar.baz@example.com'"

    if(!regExPassword.test(data.password))errors.password="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.\nPuede tener otros símbolos."

    return errors
}