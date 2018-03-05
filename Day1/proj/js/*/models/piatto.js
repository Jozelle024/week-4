"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Piatto = /** @class */ (function () {
    function Piatto(id, nomePiatto, prezzo, sconto) {
        this.id = id;
        this.nomePiatto = nomePiatto;
        this.prezzo = prezzo;
        this.sconto = sconto;
        this.prezzoTotale = prezzo * (1 - sconto); // sconto example 0.5
    }
    return Piatto;
}());
exports.Piatto = Piatto;
