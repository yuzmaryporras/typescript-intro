export let name = 'Yuzmary';
export const age: number = 35;
export const isValid: boolean = true;

name = 'Mellisa';

export const templatestring=  `
Esto es un string multilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }
`

console.log(templatestring);
