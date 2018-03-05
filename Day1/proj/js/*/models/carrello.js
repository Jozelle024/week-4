"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carrello = /** @class */ (function () {
    function Carrello() {
        this.piatti = [];
        this.subTotale = 0;
        this.totale = 0;
    }
    Carrello.prototype.aggiungiPiatto = function (piatto) {
        this.piatti.push(piatto);
        this.subTotale += piatto.prezzo;
        this.totale += piatto.prezzoTotale;
    };
    Carrello.prototype.rimuoviPiatto = function (id) {
        var piatto = this.piatti.filter(function (x) { return x.id === id; });
        if (piatto) {
            var indice = this.piatti.indexOf(piatto);
            if (indice !== -1) {
                this.piatti.splice(indice, 1);
            }
        }
    };
    Carrello.prototype.stampaConto = function () {
        var conto = '';
        this.piatti.forEach(function (x) {
            conto += x.nomePiatto;
        });
        return conto;
    };
    return Carrello;
}());
exports.Carrello = Carrello;
