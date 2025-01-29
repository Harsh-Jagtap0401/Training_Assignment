import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
// filepath: /C:/Training/Angular/form-app/src/app/employee-form/employee-form.component.ts
export class EmployeeFormComponent {
  employee = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    department: '',
    address: '',
    isPermanent: false
  };

  employees: { name: string; email: string; phone: string; dob: string; gender: string; department: string; address: string; isPermanent: boolean; }[] = [];

  departments = ['HR', 'Engineering', 'Finance', 'Marketing'];

  onSubmit() {
    this.employees.push({ ...this.employee });
    this.employee = {
      name: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      department: '',
      address: '',
      isPermanent: false
    };
  }
}