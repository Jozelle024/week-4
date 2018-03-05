import { Piatto } from './piatto';

export class Carrello {
    piatti: Piatto[];
    subTotale: number;
    totale: number;
    constructor(){
        this.piatti = [];
        this.subTotale = 0;
        this.totale = 0;

    }

    aggiungiPiatto(piatto: Piatto){
        this.piatti.push(piatto);
        this.subTotale += piatto.prezzo;
        this.totale += piatto.prezzoTotale;
    }
    /*
    rimuoviPiatto(id : number){
        const piatto = this.piatti.filter(x=>x.id === id);
        if (piatto) {
            const indice = this.piatti.indexOf(piatto);
            if(indice !== -1){
                this.piatti.splice(indice,1);
            }
        }
    }
    */
    stampaConto (): string{
        let conto: string ='';
        this.piatti.forEach(x => {
            conto += x.nomePiatto;
        })
        return conto;
    }
}