
let AUTENTICADO = false;

export const isAutenticado = () => {
    return AUTENTICADO
}

export const setAutenticado = aut => {
    AUTENTICADO = aut;
}
