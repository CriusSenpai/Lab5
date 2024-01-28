import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
  myForm: FormGroup;
  nameValue: String
  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required, Validators.pattern("[0-3]{1}[0-9]{1}-[0-1]{1}[0-9]{1}-[0-9]{4}")]),
      mark: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }
  onFormSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
  traicay = ["oi", "Xoai"]
}
