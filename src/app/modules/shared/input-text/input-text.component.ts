import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
@Input() label = '';
@Input() idInput = 'inputText';
@Input() placeholder!: string;
@Input() control!: FormControl;
@Input() submit!: boolean;
@Input() readOnly = false;
@Input() withNumbers = false;
@Input() maxlength = 50;
@Input() minlength = 3 ;
@Input() maskRule = '';
@Input() transparentStyle = false;
@Input() backgroundColor = '';
@Input() required = false;
public alertMessage = '';

public constructor() {}

public changeText(): void {
  this.control.setValue(this.control.value.trim());
}

}
