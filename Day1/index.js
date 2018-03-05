function saluta(nome) {
    console.log("Ciao, " + nome);
}
var p = saluta('Mario');
function somma(a, b) {
    return a + b;
}
var v = somma(1, 2);
function salutaPersona(persona) {
    return "Ciao, " + persona.nome + " " + persona.cognome;
}
var persona = { nome: 'Marion', cognome: 'Cotillard' };
salutaPersona(persona);
var personaSbagliata = { name: 'John', surname: 'Smith' };
// salutaPersona(personaSbagliata); error because parameters are wrong
var Studente = /** @class */ (function () {
    function Studente(firstname, middleIntial, lastName) {
        this.firstname = firstname;
        this.middleIntial = middleIntial;
        this.lastName = lastName;
        this.fullName = firstname + ' ' + middleIntial + ' ' + lastName;
    }
    return Studente;
}());
var a = new Studente('Mario', 'B.', 'Rossi');
console.log(a.fullName);
