export function onlyLetters(value: any): boolean {
    let isValid = false
    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i')
    if (pattern.test(value)) {
        isValid = true
    }
    return isValid
}

export function onlyNumbers(value: any): boolean {
    let isValid = false
    const pattern = new RegExp('^[0-9]+$', 'i')
    if (pattern.test(value)) {
        isValid = true
    }
    return isValid
}

export function validMail(value: any): boolean {
    let isValid = false
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(value)) {
        isValid = true
    }
    return isValid
}

export function validBirthdate (value: any) {
    let isValid = false
    if (/^(\d{4})(\/|-)(0[1-9]|1[0-2])\2([0-2][0-9]|3[0-1])$/.exec(value)) {
        isValid = true
    }
    return isValid
}