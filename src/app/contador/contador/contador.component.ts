import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1>{{titulo}}</h1>
<strong>base es: {{base}}
</strong>

<button (click)="acumular(-base)">-{{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(+base)">+{{base}}</button>
    `
})
export class ContadorComponent{
    titulo: string  = 'contador App';
    numero: number = 10;
    base: number =5;
    acumular(valor:number){
      this.numero += valor;
    }
}