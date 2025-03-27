import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  titulo: string = "Loja";
  onAddToCart(){
    console.log("produto adicionado ao carrinho!");
  }
}
