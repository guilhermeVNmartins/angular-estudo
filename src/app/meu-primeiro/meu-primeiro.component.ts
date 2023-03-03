import { Component } from "@angular/core";

@Component({
    selector: ' meu-primeiro-component',
    //esses metodados servem para colocar componentes personalizados. selector é o nome da tag que queremos criar
    template: ` <p> Meu primeiro component com Angular. </p> `
})
export class MeuPrimeiroComponent{}
//export para conseguir exporta para outros lugares essa classe.
//ng g c nome é o comando usado para criar uma nova pasta 
