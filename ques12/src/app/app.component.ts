import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ques12';
  products = [
    {name: 'Whiskey', qty: 5, price: 969},
    {name: 'Vodka', qty: 17, price: 800},
    {name: 'Rum', qty: 7, price: 1750}
  ]
}
