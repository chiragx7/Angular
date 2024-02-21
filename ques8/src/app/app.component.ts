import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ques8';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  add() {
    this.result = this.num1 + this.num2;
  }

  sub() {
    this.result = this.num1 - this.num2;
  }

  mul() {
    this.result = this.num1 * this.num2;
  }

  div() {
    this.result = this.num1 / this.num2;
  }
}
