import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  form!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.form);

  }

}
