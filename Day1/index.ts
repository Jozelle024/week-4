function saluta(nome: string){
    console.log(`Ciao, ${nome}`);
}

const p = saluta('Mario');

function somma(a:number, b:number){
    return a + b;
}

const v = somma(1,2);
//const w = somma('1',2);

interface Persona {
    nome:string;
    cognome:string;
}

function salutaPersona(persona: Persona): string {
    return `Ciao, ${persona.nome} ${persona.cognome}`;
}

const persona = {nome: 'Marion', cognome: 'Cotillard'};
salutaPersona(persona);
const personaSbagliata  = {name: 'John', surname: 'Smith'};
// salutaPersona(personaSbagliata); error because parameters are wrong

class Studente {
    fullName: string;
    constructor(public firstname: string,
                public middleIntial: string,
                public lastName: string) {
                    this.fullName = firstname + ' ' + middleIntial +  ' ' + lastName;
                }
}

const a = new Studente('Mario', 'B.', 'Rossi');
console.log(a.fullName);