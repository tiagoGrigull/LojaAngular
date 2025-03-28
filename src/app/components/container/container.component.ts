import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, ChartComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  titulo: string = "Loja";

  onAddToCart(){
    console.log("produto adicionado ao carrinho!");
  }

  
  protected products: Array<Products> = [
    {
      name: 'IPhone 13',
      img: 'https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/65038654434d0-iPhone%2015%20Pro%20Natural%20titanium%20png.png',
      price: 1999.99,
      isPromo: true
    },
    {
      name: 'MacBook',
      img: 'https://www.pngarts.com/files/4/Apple-Macbook-Pro-PNG-Background-Image.png',
      price: 3000.00,
      isPromo: false
    }
  ];
    
}

export type Products = {
      name: string; 
      img: string; 
      price: number; 
      isPromo: boolean 
    };