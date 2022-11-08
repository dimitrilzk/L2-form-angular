import { Component, OnInit } from '@angular/core';
import { Supereroe } from '../classes/supereroe';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  powers = ['Invisibilita', 'Immortalita', 'Respirare']

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void {
    console.log(f);

  }

}
