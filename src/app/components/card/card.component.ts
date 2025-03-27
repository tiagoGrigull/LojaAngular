import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnInit{
  @Input() product!: { name: string; img: string; price: number; isPromo: boolean };
  @Output() addToCartEvent = new EventEmitter<void>();

  ngOnInit(){
    console.log("produto recebido");
    if(this.product.isPromo){
      console.log(this.product.name+" em promoção");
    }
  }


  addToCart() {
    console.log("Botão Adicionar ao Carrinho foi clicado.");
    this.addToCartEvent.emit();
  }
}
