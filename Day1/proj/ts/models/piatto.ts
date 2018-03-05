export class Piatto{
    prezzoTotale:number; //property

    constructor(public id: number,
            public nomePiatto: string,
            public prezzo:number,
            public sconto:number){
                this.prezzoTotale = prezzo*(1-sconto); // sconto example 0.5
    }

}