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
  title = 'ques15';
  banks: any[] = [
    {bank_name: 'HDFC', micr: 360240003, ifsc: 'HDFC0000379', address: 'Rajkot'},
    {bank_name: 'SBI', micr: 360002002, ifsc: 'SBIN0000463', address: 'Rajkot'},
    {bank_name: 'BOB', micr: 360012002, ifsc: 'BARB0RAJKOT', address: 'Rajkot'},
    {bank_name: 'ICICI', micr: 360229007, ifsc: 'ICIC0006553', address: 'Rajkot'},
    {bank_name: 'Kotak', micr: 360485002, ifsc: 'KKBK0000831', address: 'Rajkot'}
  ]
}
