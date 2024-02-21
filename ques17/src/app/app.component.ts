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
  title = 'ques17';
  stud_details: any[] = [
    {rlno: '1022', fname: 'Chirag', lname: 'Raja', class: 'MCA', div: 'A'},
    {rlno: '1015', fname: 'Gaurang', lname: 'Panchal', class: 'MCA', div: 'B'},
    {rlno: '1023', fname: 'Mihin', lname: 'Rajput', class: 'MCA', div: 'C'},
    {rlno: '1036', fname: 'Heli', lname: 'Solanki', class: 'MCA', div: 'D'},
    {rlno: '1035', fname: 'Nandini', lname: 'Patel', class: 'MCA', div: 'E'}
  ]
}
