import { Piatto } from './models/piatto';
import { servizioSconto} from './services/sconto';
import { Carrello } from './models/carrello';

const sconto = new servizioSconto();

const p1 = new Piatto(1,'Lasagna',5,sconto.calcolaSconto());
const p2= new Piatto(2,'Pizza', 4, sconto.calcolaSconto());

const menu: Piatto[] = []; // menu is an array of Piatto
menu.push(p1);
menu.push(p2);

const c1 = new Carrello();
c1.aggiungiPiatto(p1);
c1.aggiungiPiatto(p2);
console.log(`Total: ${c1.totale}`);

console.log(c1.stampaConto());
