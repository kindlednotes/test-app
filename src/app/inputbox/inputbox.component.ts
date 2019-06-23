import { Component } from '@angular/core';
import {InputFlexiData, InputGroup} from '../../assets/inputFlexiConfig';
import { FlexiConfig } from './flexiConfig';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent {
  message: String = '';
  showMessage: Boolean = false;
  name: String = '';
  state: String = '';
  inputGroup: InputGroup = new InputGroup();
  flexiConfig: FlexiConfig = InputFlexiData;
  constructor() { }

  onSubmit(): void {
    this.showMessage = true;
    this.message = `${this.name} has selected ${this.state}`;
  }

  changeIntoLowercase(value: String): String {
    return value.toLowerCase();
  }
}
