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
  title = 'ques18';
  stud_details = [
    {name: 'Chirag', rlno: 1022, m_python: 95, m_java: 99, m_security: 89, m_testing: 90, m_angular: 92, m_android: 97},
    {name: 'Gaurang', rlno: 1015, m_python: 90, m_java: 78, m_security: 88, m_testing: 75, m_angular: 74, m_android: 80},
    {name: 'Mihin', rlno: 1023, m_python: 74, m_java: 91, m_security: 82, m_testing: 70, m_angular: 60, m_android: 55},
    {name: 'Heli', rlno: 1036, m_python: 99, m_java: 99, m_security: 92, m_testing: 89, m_angular: 95, m_android: 97},
    {name: 'Nandini', rlno: 1035, m_python: 90, m_java: 85, m_security: 80, m_testing: 87, m_angular: 82, m_android: 90}
  ]

  calculateTotalMarks(student: any): number {
    return student.m_python + student.m_java + student.m_security + student.m_testing + student.m_angular + student.m_android;
  }

  calculatePercentage(student: any): number {
    const totalMarks = this.calculateTotalMarks(student);
    return (totalMarks / 600) * 100;
  }

  calculateGrade(percentage: number): string {
    if (percentage >= 90) {
      return 'A+';
    } else if (percentage >= 80) {
      return 'A';
    } else if (percentage >= 70) {
      return 'B';
    } else if (percentage >= 60) {
      return 'C';
    } else if (percentage >= 50) {
      return 'D';
    } else {
      return 'F';
    }
  }
}
