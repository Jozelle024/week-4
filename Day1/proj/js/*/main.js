"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var piatto_1 = require("./models/piatto");
var sconto_1 = require("./services/sconto");
var carrello_1 = require("./models/carrello");
var sconto = new sconto_1.servizioSconto();
var p1 = new piatto_1.Piatto(1, 'Lasagna', 5, sconto.calcolaSconto());
var p2 = new piatto_1.Piatto(2, 'Pizza', 4, sconto.calcolaSconto());
var menu = []; // menu is an array of Piatto
menu.push(p1);
menu.push(p2);
var c1 = new carrello_1.Carrello();
c1.aggiungiPiatto(p1);
c1.aggiungiPiatto(p2);
console.log("Total: " + c1.totale);
console.log(c1.stampaConto());
